import api from "./api";

export type OptionalType = {
    id: number
    productId: number
    description: Text
    oldPrice:number
    newPrice:number
    minQuantity:number
    inventoryQuantity:number
    active:boolean
}

export type ProductType = {
    id: number
    name: string
    imageUrl: string
    featured: boolean
    description: string
    active:boolean
    optional?: OptionalType[]
}

const ProductService = {
    getRandonProducts: async ()=>{
        const res = await api.get('/').catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })

        return res
    },
    calcDiscount: (OldPrice: number, newPrice: number) => {
        return ((1- (newPrice / OldPrice))*100).toFixed(2) 
    }
}

export default ProductService