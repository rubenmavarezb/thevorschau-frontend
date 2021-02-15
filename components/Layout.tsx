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
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" /> */}
        </Head>
        <Navbar/>
        {children}
        <Footer/>
      </>
    )
}