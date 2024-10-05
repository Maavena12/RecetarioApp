export interface Review {
    id?: number | string,
    idUser: number,
    idRecipe: number | string,
    comentario: string,
    estrellas: number
}