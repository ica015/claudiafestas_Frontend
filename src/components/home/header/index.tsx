import Link from 'next/link';
import { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import styles from './styles.module.sass'

const Header = function(){
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <>
            <div className={styles.homeMenu}>
                <Navbar>
                    <NavbarBrand href='/'>
                    <img 
                        src='/logo.png'
                        alt='Logo Claudia Festas'
                        className={styles.logo}
                    />
                    </NavbarBrand>
                    
                    <NavbarToggler onClick={toggleNavbar} className={styles.menuHamburger} />
                    <Collapse isOpen={!collapsed} navbar >
                        <Nav navbar>
                            <NavItem>
                                <Link
                                    href="/minhas-compras/">
                                    Compras
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    href="/favoritos/">
                                    Favoritos
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    href="/historico/">
                                    Histporico
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    href="/user/atualizar_dados">
                                    Meus dados
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    href="/Ajuda/">
                                    Ajuda
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <img /> {/*Cart Icon */}
                    <div className={styles.search}>
                        <input 
                            type={'search'} 
                            className={styles.searchInput}></input>
                        <img /> {/*Search Icon */}
                    </div>
                </Navbar>
            </div>
        </>
    )
};

export default Header