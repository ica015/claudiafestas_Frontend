import styles from '../styles/registerLogin.module.sass'
import Head from 'next/head'
import HeaderGeneric from '../src/components/common/HeaderGeneric';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Footer from '../src/components/common/footer';

const Register = function (){
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
                    <Form className={styles.form}>
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
                            <Label for='password' className={styles.label} >Senha</Label>
                        </FormGroup>
                        <FormGroup className={styles.formGroup}>
                            <Input 
                                id='passwordvalidate'
                                name='passwordvalidate'
                                type='password'
                                // placeholder='Confirme a sua senha'
                                required
                                minLength={6}
                                className={styles.input}
                            />
                            <Label for='passwordvalidate' className={styles.label} >Confirme sua senha</Label>
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
                        <Button type='submit' outline className={styles.formBtn}>
                            Cadastrar
                        </Button>
                    </Form>
                </Container>
                <Footer/>
            </main>
        </>
    )
}

export default Register;