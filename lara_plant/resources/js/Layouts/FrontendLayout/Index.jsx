import React from 'react'
import Navigation from './header/Index';


const FrontendLayout = ({ children }) => {
    return (
        <>
            <Navigation />
 
            <main className="">{children}</main>
        </>
    )
}

export default FrontendLayout;