import React from 'react'
import Header from '../Layout/Header'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div>
        <Header/>  
        <div>{children}</div> 
        <Footer/> 
    </div>
  )
}

export default Layout;