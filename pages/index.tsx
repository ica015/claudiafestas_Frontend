import Head from "next/head";
import Script from "next/script";
import Header from "../src/components/home/header";
import HeaderNoAuth from "../src/components/home/headerNoAuth";
import styles from '../styles/Home.module.sass';


const Home = () =>{
  return(
    <>
      <Head>
        <title>Bem-Vindo a loja Virtual da Claudia Festas</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta name="description" content="Os melhores produtos estão aqui" />
        <meta property="og:title" content="Claudia Festas" key="title" />
        <Script src="https://kit.fontawesome.com/02dcddae4d.js" crossOrigin="anonymous"></Script>
      </Head>
      <main>
        <HeaderNoAuth/>
        <h1>Teste</h1>
      </main>
    </>
  )
}

export default Home;