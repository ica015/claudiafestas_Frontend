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
            return error.response
        })

        return res
    },
    calcDiscount: (OldPrice: number, newPrice: number) => {
        return ((1- (newPrice / OldPrice))*100).toFixed(2) 
    }, 
    getFavoriteProducts: async ()=>{
        const token = sessionStorage.getItem('cf-token')
        const res = await api.get('/favoritos',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).catch((error)=>{
            return error.response
        })
        return res
    },
    addToFavorite: async (productId: number | string)=>{
        const token = sessionStorage.getItem('cf-token')
        const res = await api.post('/favoritos', {productId},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).catch((error)=>{
            return error.response
        })
        return res
    },
    removeFavorite: async (productId: number | string)=>{
        const token = sessionStorage.getItem('cf-token')
        const res = await api.delete('/favoritos',{
            headers:{
                Authorization: `Bearer ${token}`
            },
            data:{ productId }

        }).catch((error)=>{
            console.log(error.response.data.message)
            return error.response
        })
        return res
    },
    getFeaturedProducts: async ()=>{
        const res = await api.get('/produtos/destaque').catch((error)=>{
            return error.response
        })
        return res
    }
}

export default ProductService