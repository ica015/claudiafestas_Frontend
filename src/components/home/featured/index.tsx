import Link from 'next/link';
import { Card, CardSubtitle, Container } from 'reactstrap';
import styles from './styles.module.sass'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Featured = ()=>{

    useEffect(()=>{
        Aos.init()
    }, [])
    return (
        <>
            <div className={styles.featured} data-aos='slide-left' data-aos-duration='1200'>
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