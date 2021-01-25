import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = props => {
    return(
        <Navbar expand="lg" collapseOnSelect style={{ backgroundColor: '#075869' }} variant='dark'>
            <Navbar.Brand href="/" style={{fontSize: 24}}>ProShop</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="/login" className="userLogin">Login</a>       
                    <a href="/register" className="userLogin">Sign Up</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;