export interface Producto {
    id?:string,
    category:string,
    description:string,
    image:string,
    price:string,
    title:string,
    rating:{
        count:string
        rate:string
    },
}
