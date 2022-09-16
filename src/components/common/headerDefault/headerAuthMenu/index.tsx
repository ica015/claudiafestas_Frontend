import Link from 'next/link';
import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './styles.module.sass'
import { faQuestionCircle, faStar, faBagShopping, faClockRotateLeft, faPersonWalkingArrowLoopLeft, faIdCard, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const HeaderAuth = function({ direction, ...args }){
    const router = useRouter()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    
    const handleLogout = ()=>{
        sessionStorage.clear()
        router.push('/')
    }
    return (
        <>
            <div className={styles.loggedMenu}>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >
                    <DropdownToggle caret className={styles.btnLogged}>Carlos Henrique</DropdownToggle>
                    <DropdownMenu  {...args} className={styles.dropdownMenu}>
                        <Link href='/usuario/dados'>
                            <DropdownItem  className={styles.dropdownItem}>
                                <FontAwesomeIcon icon={faIdCard} className={styles.dropdownItemIcon}/>
                                Meus dados
                            </DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <Link href='/carrinho'>
                            <DropdownItem  className={styles.dropdownItem}>
                                <FontAwesomeIcon icon={faCartShopping} className={styles.dropdownItemIcon}/>   
                                Carrinho
                            </DropdownItem>
                        </Link >
                        <Link href='/favoritos'>
                            <DropdownItem  className={styles.dropdownItem}>
                                <FontAwesomeIcon icon={faStar} className={styles.dropdownItemIcon}/>
                                Favoritos
                            </DropdownItem>
                        </Link>
                        <Link href='/compras'>
                            <DropdownItem  className={styles.dropdownItem}>
                                <FontAwesomeIcon icon={faBagShopping} className={styles.dropdownItemIcon}/>
                                Compras
                            </DropdownItem>
                        </Link>
                        <Link href='/historico'>
                            <DropdownItem  className={styles.dropdownItem}>
                                <FontAwesomeIcon icon={faClockRotateLeft} className={styles.dropdownItemIcon}/>
                                Produtos Visitados
                            </DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <DropdownItem  className={styles.dropdownItem} onClick={handleLogout} >
                            <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} className={styles.dropdownItemIcon}/>
                            Sair
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </>
    )
};

HeaderAuth.propTypes = {
    direction: PropTypes.string,
};
export default HeaderAuth