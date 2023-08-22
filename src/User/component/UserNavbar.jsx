import React,{ useContext }  from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
//  import Cart from './Cart'

export default function UserNavbar() {
    const { state, dispatch } = useContext(GlobalContext)
    return (
        <Navbar expand="lg" className=" bg-body-tertiary">
            <Container className=''>
                <Link className='navbar-brand mx-3 text-decoration-none text-primary' to='/'><b>Electronics</b></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Link to='/' className='nav-link rounded text-secondary'>Home</Link>
                    <Link to='/brand' className='nav-link rounded text-primary'>Brand</Link>
                    <Link to='/category' className='nav-link  rounded text-warning'>Category</Link>
                    <Link to='/products' className='nav-link rounded text-danger'>Products</Link>
                    
                    {/* <Cart /> */}
                    <button className="btn btn-dark"    onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })}} >SignOut</button>
                                
                   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}