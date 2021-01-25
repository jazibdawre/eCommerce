import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import NavBar from './NavBar';

const Header = () => {
  
  const [currentUrl, setCurrentUrl] = useState(window.location.href.split('/')[3]);
  useEffect(() => {
    setCurrentUrl(window.location.href.split('/')[3]);
    console.log(window.location.href.split('/'));
  }, [currentUrl, window.location.href]);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  if(currentUrl === 'login' || currentUrl === 'register'){
    return(
      <NavBar />
    );
  }

  return (
    <>
    <header>
      <Navbar expand="lg" collapseOnSelect style={{ backgroundColor: '#075869' }} variant='dark'>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand><h1 style={{fontSize: 20, color: '#C19A6B', padding: 0, marginBottom: 0}}>ProShop</h1></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route
              render={({ history }) => (
                <SearchBox history={history} />
              )}
            />
            <Nav className="ml-auto">
              <a href="/cart" style={{ fontSize: 16, color: '#C19A6B', marginRight: 8, textDecoration: 'none' }} className='navLinks'>
                <i className="fas fa-shopping-cart" /> Cart
              </a>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  {<a href="/login" style={{ fontSize: 16, color: '#C19A6B', marginLeft: 8,textDecoration: 'none' }} className='navLinks'>
                      <i className="fas fa-user" /> Login
                    </a>}
                </>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  );
};

export default Header;
