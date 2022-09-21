
import { Container } from 'reactstrap';
import styles from './styles.module.sass'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import useSWR from 'swr';
import ProductService from '../../../services/ProductService';
import FeaturedComponent from './featuredComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

const Featured = ()=>{

    const {data, error} = useSWR('/produtos/destaque', ProductService.getFeaturedProducts)
    
    useEffect(()=>{
        Aos.init()
    }, [])
    
    if (error) return error
    if (!data){
        return(
            <>
                <p className={styles.loadingFeatures}>Buscando destaques.</p>
            </>
        )
    }
    
    return (
        <>
            <div className={styles.featured} data-aos='slide-left' data-aos-duration='1200'>
                <Container className={styles.featuredContainer} >
                    {
                        data.data.length >=1?(
                            data.data?.map((product:any)=>(
                                <FeaturedComponent key={product.id} product={product} />
                            ))
                        ):(
                            <p className={styles.noFeatures}>Neste momento existem produtos em destaque
                                <FontAwesomeIcon icon={faSadCry} className={styles.noFeaturedIcon} />
                            </p>
                        )
                    }
                </Container>
            </div>
            
        </>
    )
}

export default Featured;