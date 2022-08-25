import Link from 'next/link';
import { Card, CardSubtitle, Container } from 'reactstrap';
import styles from './styles.module.sass'
const Featured = ()=>{
    return (
        <>
            <div className={styles.featured}>
                <Container className={styles.featuredContainer} >
                    <Link href='/meninos'>    
                        <Card className={styles.card}>
                            <img
                                src='/featured/featured.png'
                                alt='Produto em destaque'
                                />
                            <CardSubtitle className={styles.description}>
                                Meninos
                            </CardSubtitle>
                        </Card>
                    </Link>
                    <Link href='/meninos'>    
                        <Card className={styles.card}>
                            <img
                                src='/featured/featured.png'
                                alt='Produto em destaque'
                                />
                            <CardSubtitle className={styles.description}>
                                Meninos
                            </CardSubtitle>
                        </Card>
                    </Link>
                    <Link href='/meninos'>    
                        <Card className={styles.card}>
                            <img
                                src='/featured/featured.png'
                                alt='Produto em destaque'
                                />
                            <CardSubtitle className={styles.description}>
                                Meninos
                            </CardSubtitle>
                        </Card>
                    </Link>
                    <Link href='/meninos'>    
                        <Card className={styles.card}>
                            <img
                                src='/featured/featured.png'
                                alt='Produto em destaque'
                                />
                            <CardSubtitle className={styles.description}>
                                Meninos
                            </CardSubtitle>
                        </Card>
                    </Link>
                    <Link href='/meninos'>    
                        <Card className={styles.card}>
                            <img
                                src='/featured/featured.png'
                                alt='Produto em destaque'
                                />
                            <CardSubtitle className={styles.description}>
                                Meninos
                            </CardSubtitle>
                        </Card>
                    </Link>
                    <Link href='/meninos'>    
                        <Card className={styles.card}>
                            <img
                                src='/featured/featured.png'
                                alt='Produto em destaque'
                                />
                            <CardSubtitle className={styles.description}>
                                Meninos
                            </CardSubtitle>
                        </Card>
                    </Link>
                    <Link href='/meninos'>    
                        <Card className={styles.card}>
                            <img
                                src='/featured/featured.png'
                                alt='Produto em destaque'
                                />
                            <CardSubtitle className={styles.description}>
                                Meninos
                            </CardSubtitle>
                        </Card>
                    </Link>
                    <Link href='/meninos'>    
                        <Card className={styles.card}>
                            <img
                                src='/featured/featured.png'
                                alt='Produto em destaque'
                                />
                            <CardSubtitle className={styles.description}>
                                Meninos
                            </CardSubtitle>
                        </Card>
                    </Link>
                    
                </Container>
            </div>
            
        </>
    )
}

export default Featured;