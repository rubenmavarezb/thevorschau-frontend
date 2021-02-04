import React from 'react';
import { Children } from '../interfaces/index';


export default function Layout({children}: Children) {
    return (
      <div>
        {children}
      </div>
    )
}