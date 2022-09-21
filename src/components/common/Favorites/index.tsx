import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import ProductService, { ProductType } from '../../../services/ProductService'
import styles from './styles.module.sass'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap'

interface props {
    product: ProductType,
}

export default function Favorites({product}:props){
    
    return(
        <>
            <div className={styles.productContainer}data-aos='flip-left' data-aos-duration='1000'>
                <div className={styles.product}>
                    <Link href={`/produto/${product.id}`}>
                        <div className={styles.productDetails}>
                            <div className={styles.alignTop}>
                                <div className={styles.image}>
                                    <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${product.imageUrl}`} alt={`${product.name}`} />
                                </div>
                                <p>{`${product.name}`}</p>
                            </div>
                            <div className={styles.prices}>
                                {/* <span className={styles.discount}>{ProductService.calcDiscount(product.optional![0].oldPrice,product.optional![0].newPrice)}%</span>
                                <span className={styles.oldPrice}>R$ {`${product.optional![0].oldPrice.toFixed(2).replace('.',',')}`}</span> */}
                                {/* {console.log(product)} */}
                                <span className={styles.newPrice}>R$ {`${product.optional![0].newPrice.toFixed(2).replace('.',',')}`}</span>
                            </div>
                            
                            
                        </div>
                    </Link>
                    <FontAwesomeIcon icon={faStarSolid} className={styles.favorite}/>
                    <div className={styles.buttons}>
                        <Button className={styles.buyNow}>Comprar Agora</Button>
                        <Button className={styles.addCart} outline>Adicionar ao Carrinho</Button>
                    </div>
                </div>
            </div>
        </>
    )
}