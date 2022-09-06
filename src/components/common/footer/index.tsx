import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faBell, faHouseChimney, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Container } from 'reactstrap'
import styles from './style.module.sass'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Footer() {
    useEffect(()=>{
        Aos.init()
    }, [])

    return (
        <>
            <div className={styles.backgroundColor} data-aos='fade-up' data-aos-duration='1000'>
                <Container className={styles.container}>
                    <div className={styles.info}>
                        <div>
                            <h5>Visite nossas Redes Sociais</h5>
                            <div className={styles.socialMedia}>
                                <a href='https://www.facebook.com/ClaudiaFestasBuffet' target={'_blank'}>
                                    <div>
                                        <FontAwesomeIcon icon={faFacebook} className={styles.facebook} />
                                        <span>ClaudiaFestasBuffet</span>
                                    </div>
                                </a>
                                <a href='https://www.instagram.com/claudiafestasbuffet/' target={'_blank'}>
                                    <div>
                                        <FontAwesomeIcon icon={faInstagram} className={styles.instagram} />
                                        <span>@claudiafestasbuffet</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className={styles.datas}>
                                <div className={styles.leftSide}>
                                    <p>(12) 3103-1286</p>
                                    <a href='https://web.whatsapp.com/send?phone=+5512981243283' target={'_blank'}>
                                        <span><FontAwesomeIcon
                                            icon={faWhatsapp}
                                            className={styles.logoWhatsApp} /> (12)98124-3283</span>
                                    </a>
                                    <a href='mailto:claudia@claudiafestas.net'>
                                        <span>claudia@claudiafestas.net</span>
                                    </a>

                                </div>
                                <div className={styles.rightSide}>
                                    <p>Rua Bernanrdino de Campos, 513</p>
                                    <p>Loja 2, Centro</p>
                                    <p>Cachoeira Paulista</p>
                                </div>
                            </div>
                            <div className={styles.cnpj}>
                                <p>CNPJ: 08.654.087/0001-22</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rights}>
                        <p>Todos os direitos reservados <strong>Claudia Festas Buffet</strong></p>
                    </div>
                </Container>
            </div>
            <div className={styles.credits}>
                <p>{`Esta loja foi desenvolvida por `}
                    <Link href='https://ica015.github.io'>
                        <strong>Carlos Henrique Amorim</strong>
                    </Link>
                </p>
            </div>
            <div className={styles.menuMobile}>
                <div className={styles.menuIcon}>
                    <Link href='/'>
                        <div className={styles.menu}>
                            <FontAwesomeIcon icon={faHouseChimney} className={styles.icon} />
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link href='/favoritos'>
                        <div className={styles.menu}>
                            <FontAwesomeIcon icon={faStar} className={styles.icon} />
                            <p>Favoritos</p>
                        </div>
                    </Link>
                    <Link href='/carrinho'>
                        <div className={styles.menu}>
                            <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
                            <p>Compras</p>
                        </div>
                    </Link>
                    <Link href='/notificacoes'>
                        <div className={styles.menu}>
                            <FontAwesomeIcon icon={faBell} className={styles.icon} />
                            <p>Notificações</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}