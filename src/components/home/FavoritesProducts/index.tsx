import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import useSWR from 'swr'
import ProductService, { ProductType } from '../../../services/ProductService'
import Favorites from '../../common/Favorites'
import styles from './styles.module.sass'

interface props{
    product:ProductType[]
  }

export default function FavoritesProducts(){
    const [isLogged, setIsLogged] = useState(false)
    const router = useRouter()

    useEffect(()=>{
        if(sessionStorage.getItem('cf-token')){
            setIsLogged(true)
        }else{
            setIsLogged(false)
        }
    },[router.push])

    const { data, error } = useSWR('/favoritos', ProductService.getFavoriteProducts)
    if(isLogged){
        if(error) return error
        if(!data){
            return (
                <>
                    <p>Buscando Favoritos...</p>
                </>
            )   
        }
        return(
            <>
                <Container className='d-flex flex-wrap justify-content-start mt-4' data-aos='fade-zoom-in' data-aos-duration='1600'>
                    <h3 className={styles.titleFavorites}>Favoritos</h3>
                    {  
                        data.data.Product.length >=1? (
                            data.data.Product.map((product: any) =>(
                                <Favorites key={product.id} product={product}/>
                            ))
                        ):(
                            <p className={styles.noFavorites}>Você ainda não tem nenhum produto em sua lista de Favoritos 
                                <FontAwesomeIcon icon={faFaceFrown} className={styles.noFavoritesIcon} />
                            </p>
                        )
                    }
                </Container>
            </>
        )

    }
}