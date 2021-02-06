import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Children } from '../interfaces/index';


export default function Layout({children}: Children) {

    return (
      <>
        <Navbar/>
        {children}
        <Footer/>
      </>
    )
}