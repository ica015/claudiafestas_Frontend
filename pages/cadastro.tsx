import styles from '../styles/registerLogin.module.sass'
import Head from 'next/head'
import HeaderGeneric from '../src/components/common/HeaderGeneric';

const Register = function (){
    return(
        <>
            <Head>
                <title>Claudia Festas - Registro</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <main>
                <HeaderGeneric logoUrl='/' btnUrl='/login' btnContent='Já tenho conta'/>
            </main>
        </>
    )
}

export default Register;