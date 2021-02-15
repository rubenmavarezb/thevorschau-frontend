import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { Children } from '../interfaces/index';


export default function Layout({children}: Children) {

    return (
      <>
        <Head>
          <title>The Vorschau | Clothes for everyone </title>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Exo:wght@300;400;600&family=Ramabhadra&display=swap" rel="stylesheet"/>
        </Head>

        <Navbar/>
          {children}
        <Footer/>
      </>
    )
}