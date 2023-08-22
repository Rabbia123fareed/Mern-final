import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function GuestNav() {
    return (
        <Navbar expand="lg" className=" bg-body-tertiary">
            <Container className=''>
                <Link className='navbar-brand mx-3 text-decoration-none text-primary' to='/'><b>Electronics</b></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Link to='/' className='nav-link bg-secondary mx-3 text-decoration-none text-dark align-item-center rounded'>Home</Link>
                        <Link to='/brand' className='nav-link bg-primary mx-3 text-decoration-none text-dark align-item-center rounded'>Brand</Link>
                        <Link to='/category' className='nav-link bg-info mx-3 text-decoration-none text-dark align-item-center rounded'>Category</Link>
                        <Link to='/login' className='nav-link bg-warning mx-3 text-decoration-none text-dark align-item-center rounded'>Login</Link>
                        <Link to='/signup' className='nav-link bg-danger mx-3 text-decoration-none text-dark align-item-center rounded'>Signup</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}