import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import styles from './styles.module.sass'

const HeaderNoAuth = function () {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <div className={styles.navHome}>
                <Container className={styles.nav}>
                    <div className={styles.brandMenu}>
                        <NavbarBrand href='/'>
                            <img
                                src='/logo.png'
                                alt='Logo Claudia Festas'
                                className={styles.logo}
                            />
                        </NavbarBrand>
                        <div className={styles.navButton}>
                            <Link href='/cadastro'>
                                <Button className={styles.btnCadastro}>Cadastrar</Button>
                            </Link>
                            <Link href='/login'>
                                <Button className={styles.btnLogin}>Login</Button>
                            </Link>
                            {/*<img /> Cart Icon 
                            <FontAwesomeIcon icon='fa-solid fa-cart-shopping' />*/}
                        </div>
                    </div>
                    <div className={styles.search}>
                        <input
                            type={'search'}
                            placeholder="Encontre aqui tudo para seu evento"
                            className={styles.searchInput}></input>
                        {/* <div className={styles.btnSearch}>
                            <img src='lupa.png'/>
                        </div> */}
                        <img src='lupa.png'/>
                    </div>
                </Container>
                <div >

                </div>
            </div>
        </>
    )
};

export default HeaderNoAuth