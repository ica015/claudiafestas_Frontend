import Link from 'next/link';
import { Button } from 'reactstrap';
import styles from './styles.module.sass'


const HeaderNoAuthMenu = function () {

    return (
        <>
            <Link href='/cadastro'>
                <Button className={styles.btnCadastro}>Cadastrar</Button>
            </Link>
            <Link href='/login'>
                <Button className={styles.btnLogin}>Login</Button>
            </Link>

        </>
    )
};

export default HeaderNoAuthMenu