import Head from "next/head"
import styles from '../styles/registerLogin.module.sass'
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import Footer from "../src/components/common/footer"
import HeaderGeneric from "../src/components/common/HeaderGeneric"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import authService from "../src/services/authService"
import Link from "next/link"
import { FormEvent } from "react"

const Login = ()=>{
    const handleLogin = async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        const stayLogged = formData.get('stayLogged')
        const params = {email, password, stayLogged}

        const {data, status} = await authService.login(params)
        if(status === 201){
            alert('Login realizado com sucesso')
        }else{
            alert(data.message)
        }
    }

    return(
        <>
            <Head>
                <title>Claudia Festas - Login</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <main className={styles.main}>
                <HeaderGeneric 
                    logoUrl="/"
                    btnContent="Criar Conta"
                    btnUrl="/cadastro"
                />
                <Container className='py-3'>
                    <p className={styles.formTitle}><strong>Acesse sua conta</strong></p>
                    <Form className={styles.form} onSubmit={handleLogin}> 
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='email'
                                name='email'
                                type='email'
                                required
                                className={styles.input}
                            />
                            <Label for='email' className={styles.label} >Email</Label>
                        </FormGroup>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Mínimo 6 caracteres'
                                required
                                minLength={6}
                                className={styles.input}
                            />
                            <FontAwesomeIcon 
                                icon={faEyeSlash}
                                className={styles.show}    
                            />
                            <FontAwesomeIcon 
                                id='iconPassword'
                                icon={faEye}
                                className={styles.show}
                                onClick={()=>{authService.showPassword('password', 'iconPassword')}}    
                            />
                            <Label for='password' className={styles.label} >Senha</Label>
                        </FormGroup>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='stayLogged'
                                name='stayLogged'
                                type='checkbox'
                                className={styles.stayLoggedBtn}
                            />
                            <Label for='stayLogged' className={styles.stayLoggedLabel} >Permanecer conectado</Label>
                        </FormGroup>
                        <div className={styles.menuBtnForm}>
                            <Link href='/recuperar_senha'>
                                <span className={styles.forgotPassword}>Esqueci minha senha</span>
                            </Link>
                            <Button type='submit' outline className={styles.formBtn}>
                                Entrar
                            </Button>
                        </div>
                    </Form>
                </Container>
                <Footer/>
            </main>
        </>
    )
}
export default Login