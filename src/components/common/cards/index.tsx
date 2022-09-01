import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Container, Button } from 'reactstrap'
import styles from './style.module.sass'
import ProductService, { OptionalType, ProductType } from '../../../services/ProductService'

interface props {
    product: ProductType,
    // optional: OptionalType[]
}

export default function Cards({ product }:props) {
    return (
        <>
            <div className={styles.productContainer}>
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
                                <span className={styles.discount}>{ProductService.calcDiscount(product.optional![0].oldPrice,product.optional![0].newPrice)}%</span>
                                <span className={styles.oldPrice}>R$ {`${product.optional![0].oldPrice.toFixed(2).replace('.',',')}`}</span>
                                <span className={styles.newPrice}>R$ {`${product.optional![0].newPrice.toFixed(2).replace('.',',')}`}</span>
                            </div>
                            
                            
                        </div>
                    </Link>
                    <FontAwesomeIcon icon={faStarRegular} className={styles.favorite} />
                    <div className={styles.buttons}>
                        <Button className={styles.buyNow}>Comprar Agora</Button>
                        <Button className={styles.addCart} outline>Adicionar ao Carrinho</Button>
                    </div>
                </div>
            </div>
        </>
    )

        
}
