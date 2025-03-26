// ./frontend/src/pages/Navbar.js

import React from 'react'
import { Heading, Logo, Navbar } from '../components/navbar'

const Navbarbar = () => {
  return (
    <Heading>
        <Logo>Logo</Logo>
        <Navbar>
            <a href='/'>Home</a>
            <a href='/login'>Login</a>
            <a href='/register'>Register</a>
            <a href='/#'>Services</a>
            <a href='/#'>Contact</a>
        </Navbar>
    </Heading>
  )
}

export default Navbarbar
