import styles from '../styles/registerLogin.module.sass'
import Head from 'next/head'
import HeaderGeneric from '../src/components/common/HeaderGeneric';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Footer from '../src/components/common/footer';
import { FormEvent, useState } from 'react';
import authService from '../src/services/authService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import ToastComponent from '../src/components/common/toast';


const Register = function (){
    const router = useRouter()
    const [ToastIsOpen, setToastIsOpen] = useState(false)
    const [ToastMessage, setToastMessage] = useState("")

    const handleRegister = async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')!.toString()
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        const passwordValidate = formData.get('passwordValidate')!.toString()
        const nickname = formData.get('nickname')!.toString()
        const cpf = formData.get('cpf')!.toString()
        const birth = formData.get('birth')!.toString()
        const phone = formData.get('phone')!.toString()
        const celphone = formData.get('celphone')!.toString()
        const params = {name, email, password, nickname, cpf, birth, phone, celphone}

        if (password != passwordValidate){
            setToastIsOpen(true)
            setTimeout(()=>{
                setToastIsOpen(false)
            }, 1000 * 3)
            setToastMessage('Senha e confirmação diferentes')
            return
        }

        const {data, status} = await authService.register(params)
        if (status === 201){
            router.push('/login?registred=true')
        }else{
            setToastIsOpen(true)
            setTimeout(()=>{
                setToastIsOpen(false)
            }, 1000 * 3)
            setToastMessage(data.message)
        }
    }

    return(
        <>
            <Head>
                <title>Claudia Festas - Registro</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                <script src="https://jsuites.net/v4/jsuites.js"></script>
            </Head>
            <main className={styles.main}>
                <HeaderGeneric 
                    logoUrl='/' 
                    btnUrl='/login' 
                    btnContent='Já tenho conta'
                />
                <Container className='py-3'>
                    <p className={styles.formTitle}><strong>Crie sua conta</strong></p>
                    <Form className={styles.form} onSubmit={handleRegister}>
                        <p className='text-left'>
                            <strong>Dados de Acesso</strong>
                        </p>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='email'
                                name='email'
                                type='email'
                                // placeholder='Digite seu melhor e-mail'
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
                                id='passwordValidate'
                                name='passwordValidate'
                                type='password'
                                // placeholder='Confirme a sua senha'
                                required
                                minLength={6}
                                className={styles.input}
                            />
                            <FontAwesomeIcon 
                                icon={faEyeSlash}
                                className={styles.show}    
                            />
                            <FontAwesomeIcon 
                                id='iconPasswordValidate'
                                icon={faEye}
                                className={styles.show}
                                onClick={()=>{authService.showPassword('passwordValidate', 'iconPasswordValidate')}}    
                            />
                            <Label for='passwordValidate' className={styles.label} >Confirme sua senha</Label>
                        </FormGroup>
                        <hr/>
                        <p className='text-left'>
                            <strong>Dados Pessoais</strong>
                        </p>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='name'
                                name='name'
                                type='text'
                                // placeholder='Qual seu nome'
                                required
                                maxLength={150}
                                className={styles.input}
                            />
                            <Label for='name' className={styles.label} >Nome Completo</Label>
                        </FormGroup>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='nickname'
                                name='nickname'
                                type='text'
                                // placeholder='Como gostaria de ser chamado (ou Apelido)?'
                                maxLength={50}
                                required
                                className={styles.input}
                            />
                            <Label for='nickname' className={styles.label} >Apelido</Label>
                        </FormGroup>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='cpf'
                                name='cpf'
                                type='text'
                                placeholder='Somente números'
                                required
                                data-mask='000.000.000-00'
                                className={styles.input}
                            />
                            <Label for='cpf' className={styles.label} >CPF</Label>
                        </FormGroup>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='birth'
                                name='birth'
                                type='date'
                                max={Date()}
                                required
                                className={styles.input}
                            />
                            <Label for='birth' className={styles.label} >Data de Aniversário</Label>
                        </FormGroup>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='celphone'
                                name='celphone'
                                type='tel'
                                // placeholder='Somente números'
                                data-mask='[-]+55 (00) 00000-0000'
                                required
                                className={styles.input}
                            />
                            <Label for='celphone' className={styles.label} >Celular</Label>
                        </FormGroup>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='phone'
                                name='phone'
                                type='tel'
                                // placeholder='Somente números'
                                required
                                data-mask='[-]+55 (00) 0000-0000'
                                className={styles.input}
                            />
                            <Label for='phone' className={styles.label} >Telefone Adicional</Label>
                        </FormGroup>
                        <div className={styles.menuBtnForm}>
                            <Button type='submit' outline className={styles.formBtn}>
                                Cadastrar
                            </Button>
                        </div>
                    </Form>
                </Container>
                <Footer/>
                <ToastComponent 
                    color='bg-danger'
                    isOpen={ToastIsOpen}
                    message={ToastMessage}
                />
            </main>
        </>
    )
}

export default Register;