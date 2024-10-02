import { defineStore } from 'pinia';  
import axios from 'axios';  
import { user } from '@/interface/user';

const useUserStore = defineStore('user', {  
  state: () => ({  
    users: [],  
    currentUser: null,  
  }),  
  actions: {  
    async fetchUsers() {  
      const response = await axios.get('http://localhost:3000/users');  
      this.users = response.data;  
    },  
    async fetchUser(id: number | string) {
      const response = await axios.get(`http://localhost:3000/users/${id}`);  
      this.users = response.data; 
      return response.data 
    },
    async updateUser(user: Partial<user>) {  
      const response = await axios.get('http://localhost:3000/users');
      const allUsers = response.data
      const equalName = allUsers.find(users => users.nombreUsuario === user.nombreUsuario && users.id !== user.id)
      const equalEmail = allUsers.find(users => users.correo === user.correo && users.id !== user.id)
      if (equalName === undefined && equalEmail === undefined){
        await axios.put(`http://localhost:3000/users/${user.id}`, user);  
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
      await axios.delete(`http://localhost:3000/users/${id}`);  
      this.fetchUsers();  
    },  
    async register(user: Partial<user>) {  
      const response = await axios.post('http://localhost:3000/users', user);  
      this.users.push(response.data);  
      this.currentUser = response.data;
    },  
    async login(email: string, password: string) {  
      const response = await axios.get('http://localhost:3000/users', {  
        params: { email, password },  
      });  
      const authenticatedUsers = response.data.filter(user => 
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