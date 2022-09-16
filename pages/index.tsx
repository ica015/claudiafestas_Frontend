import { GetStaticProps } from "next";
import Head from "next/head";
import Script from "next/script";
import { ReactNode, useEffect, useState } from "react";
import ProductsList from "../src/components/common/cards";
import Footer from "../src/components/common/footer";
import CardsProducts from "../src/components/home/CardsProducts";
import Featured from "../src/components/home/featured";
import ProductService, { ProductType } from "../src/services/ProductService";
import styles from '../styles/Home.module.sass';
import HeaderDefault from "../src/components/common/headerDefault";


interface IndexPageProps{
  children?: ReactNode,
  products: ProductType[]
}
const Home = ({products}: IndexPageProps) =>{
  
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
        {/* {
          // console.log(isLogged)
         headerSelected
        } */}
        <HeaderDefault/>
        <Featured/>
        <CardsProducts product={products}/>
        <h1>Teste</h1>
        <Footer/>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await ProductService.getRandonProducts()
  return{
    props: {
      products: res.data
    },
    revalidate: 3600 * 24
  }
}
export default Home;