"use client"
import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import { FaSearch ,FaBook, FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from '/public/assets/logo.svg'
import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  return (
    <>
   
      <Navbar className='main-nav p-0' bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><Image src={Logo} alt='logo' height={100} width={100} /></Navbar.Brand>
          <Nav className="justify-content-between text-uppercase fw-semibold" >
            <Link href="#home"><FaSearch className='me-2'/> search</Link>
            <Link href="#features"><FaBook className='me-2'/>estimate</Link>
            <Link href="#pricing"><FaBook className='me-2'/>resource</Link>
            <Link href="#pricing"><FaUser className='me-2'/>account</Link>
            <Link href="#pricing"><FaShoppingCart className='me-2'/>my cart</Link>
          </Nav>
        </Container>
      </Navbar>
      
      
      <Navbar  className="bg-body-tertiary p-0 sub-nav" data-bs-theme="light">
        <Container>
          <Nav className="justify-content-between text-capitalize text-center fw-semibold">
            <Link href="#home">Business cards</Link>
            <Link href="#features">marketing products</Link>
            <Link href="#pricing">signs & banner</Link>
            <Link href="#pricing">boxes & pakaging</Link>
            <Link href="#pricing">roll labels & stickers</Link>
            <Link href="#pricing">promo products</Link>
            <Link href="#pricing">majestic  products</Link>
            <Link href="#pricing">direct mail services</Link>
            <Link href="#pricing">marketplace</Link>


          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;