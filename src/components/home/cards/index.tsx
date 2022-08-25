import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStar } from '@fnt'
import Link from 'next/link'
import { Container, Button } from 'reactstrap'
import styles from './style.module.sass'

export default function ProductsList() {
    return (
        <>
            <Container className='d-flex flex-wrap justify-content-center mt-4'>
                <div className={styles.productContainer}>
                    <div className={styles.product}>
                        <Link href='/product/id'>
                            <div className={styles.productDetails}>
                                <div className={styles.alignTop}>
                                    <div className={styles.image}>
                                        <img src="/products/vela_numero.jpg" alt="Descrição da Imagem" />
                                    </div>
                                    <p>Vela de número colorida</p>
                                </div>
                                <div className={styles.prices}>
                                    <span className={styles.discount}>10%</span>
                                    <span className={styles.oldPrice}>R$ 11,00</span>
                                    <span className={styles.newPrice}>R$ 10,00</span>
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
                <div className={styles.productContainer}>
                    <div className={styles.product}>
                        <Link href='/product/id'>
                            <div className={styles.productDetails}>
                                <div className={styles.alignTop}>
                                    <div className={styles.image}>
                                        <img src="/products/bexigas.jpg" alt="Descrição da Imagem" />
                                    </div>
                                    <p>Bexigas coloridas</p>
                                </div>
                                <div className={styles.prices}>
                                    <span className={styles.discount}>10%</span>
                                    <span className={styles.oldPrice}>R$ 11,00</span>
                                    <span className={styles.newPrice}>R$ 10,00</span>
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
                <div className={styles.productContainer}>
                    <div className={styles.product}>
                        <Link href='/product/id'>
                            <div className={styles.productDetails}>
                                <div className={styles.alignTop}>
                                    <div className={styles.image}>
                                        <img src="/products/vela_numero.jpg" alt="Descrição da Imagem" />
                                    </div>
                                    <p>Vela de número colorida</p>
                                </div>
                                <div className={styles.prices}>
                                    <span className={styles.discount}>10%</span>
                                    <span className={styles.oldPrice}>R$ 11,00</span>
                                    <span className={styles.newPrice}>R$ 10,00</span>
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
                <div className={styles.productContainer}>
                    <div className={styles.product}>
                        <Link href='/product/id'>
                            <div className={styles.productDetails}>
                                <div className={styles.alignTop}>
                                    <div className={styles.image}>
                                        <img src="/products/bexigas.jpg" alt="Descrição da Imagem" />
                                    </div>
                                    <p>Bexigas coloridas</p>
                                </div>
                                <div className={styles.prices}>
                                    <span className={styles.discount}>10%</span>
                                    <span className={styles.oldPrice}>R$ 11,00</span>
                                    <span className={styles.newPrice}>R$ 10,00</span>
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
                <div className={styles.productContainer}>
                    <div className={styles.product}>
                        <Link href='/product/id'>
                            <div className={styles.productDetails}>
                                <div className={styles.alignTop}>
                                    <div className={styles.image}>
                                        <img src="/products/vela_numero.jpg" alt="Descrição da Imagem" />
                                    </div>
                                    <p>Vela de número colorida</p>
                                </div>
                                <div className={styles.prices}>
                                    <span className={styles.discount}>10%</span>
                                    <span className={styles.oldPrice}>R$ 11,00</span>
                                    <span className={styles.newPrice}>R$ 10,00</span>
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
                <div className={styles.productContainer}>
                    <div className={styles.product}>
                        <Link href='/product/id'>
                            <div className={styles.productDetails}>
                                <div className={styles.alignTop}>
                                    <div className={styles.image}>
                                        <img src="/products/bexigas.jpg" alt="Descrição da Imagem" />
                                    </div>
                                    <p>Bexigas coloridas</p>
                                </div>
                                <div className={styles.prices}>
                                    <span className={styles.discount}>10%</span>
                                    <span className={styles.oldPrice}>R$ 11,00</span>
                                    <span className={styles.newPrice}>R$ 10,00</span>
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


            </Container>
        </>
    )
}