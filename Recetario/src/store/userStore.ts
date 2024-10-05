import { defineStore } from 'pinia';  
import axios from 'axios';  
import { User } from '@/interface/user';

interface UserStoreState {  
  users: User[]; // Asegúrate de que users sea un array de user  
  currentUser: User | null;  
} 

const useUserStore = defineStore('user', {  
  state: (): UserStoreState => ({  
    users: [],  
    currentUser: null,  
  }),  
  actions: {  
    async fetchUsers() {  
      const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/users`);  
      this.users = response.data;  
    },  
    async fetchUser(id: number | string) {
      const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/users/${id}`);  
      this.users = response.data; 
      return response.data 
    },
    async updateUser(user: Partial<User>) {  
      const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/users`);
      const allUsers = response.data
      const equalName = allUsers.find((users: { nombreUsuario: string | undefined; id: number | undefined; }) => users.nombreUsuario === user.nombreUsuario && users.id !== user.id)
      const equalEmail = allUsers.find((users: { correo: string | undefined; id: number | undefined; }) => users.correo === user.correo && users.id !== user.id)
      if (equalName === undefined && equalEmail === undefined){
        await axios.put(`${import.meta.env.VITE_JSON_SERVER_URL}/users/${user.id}`, user);  
        this.loadSession()
        this.fetchUsers(); 
        return true;
      } else {
        if (equalName !== undefined){
          return 'El nombre de usuario esta en uso.'
        } else if (equalEmail !== undefined){
          return 'El correo esta en uso.'
        } else {
          return 'El nombre de usuario y el correo estan en uso.'
        }
      }
    },  
    async deleteUser(id: number) {  
      await axios.delete(`${import.meta.env.VITE_JSON_SERVER_URL}/users/${id}`);  
      this.fetchUsers();  
    },  
    async register(user: Partial<User>) {  
      const response = await axios.post(`${import.meta.env.VITE_JSON_SERVER_URL}/users`, user);  
      this.users.push(response.data);  
      this.currentUser = response.data;
    },  
    async login(email: string, password: string) {  
      const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/users`, {  
        params: { email, password },  
      });  
      const authenticatedUsers = response.data.filter((user: { correo: string; contraseña: string; }) => 
        user.correo === email && user.contraseña === password
      );
      if (authenticatedUsers.length > 0) {  
        this.currentUser = authenticatedUsers[0]; 
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      } else {  
        throw new Error('Credenciales inválidas');  
      }  
    },  
    logout() {  
      this.currentUser = null; // Clear current user on logout  
    },  
    loadSession() {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser); // Cargar el usuario desde localStorage
      }
    },
  },  
});

export default useUserStore