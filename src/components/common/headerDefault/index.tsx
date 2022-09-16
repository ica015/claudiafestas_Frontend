import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container, NavbarBrand, Button } from 'reactstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './styles.module.sass'
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import HeaderNoAuthMenu from './headerNoAuthMenu';
import HeaderAuth from './headerAuthMenu';
import { useRouter } from 'next/router';

const HeaderDefault = function(){
    const router = useRouter()
    // const [collapsed, setCollapsed] = useState(true);

    // const toggleNavbar = () => setCollapsed(!collapsed);
    const [isLogged, setIsLogged] = useState(false)
    useEffect(()=>{
        if (sessionStorage.getItem('cf-token')){
            setIsLogged(true)
        }else{
            setIsLogged(false)
        }

    },[router.push])
    
    let showMenu
    if(isLogged){
        showMenu = <HeaderAuth direction='down'/>
    }else{
        showMenu = <HeaderNoAuthMenu/>
    }
    
    return (
        <>
            <div className={styles.navHome} >
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
                            {showMenu}
                            <div>
                                <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon}/>
                                <Link href='/carrinho'>
                                    <span className={styles.prodquantity}>10</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.search}>
                        <input
                            type={'search'}
                            placeholder="Encontre aqui tudo para seu evento"
                            className={styles.searchInput}></input>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.btnSearch}/>
                        </div>
                </Container>
                <div >

                </div>
            </div>
        </>
    )
};

export default HeaderDefault