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
        </Head>

        <Navbar/>
          {children}
        <Footer/>
      </>
    )
}