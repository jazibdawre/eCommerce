import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import { DARK_BLUE_2, LIGHT_PEACH } from '../util/colors';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <header>
        <StyledNavbar expand="lg" collapseOnSelect variant="dark">
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand>
                <StyledH1>ProShop</StyledH1>
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Route
                render={({ history }) => (
                  <SearchBox history={history} />
                )}
              />
              <Nav className="ml-auto">
                <StyledA
                  href={userInfo ? '/cart' : '/register'}
                  className="navLinks"
                >
                  <i
                    className={userInfo ? 'fas fa-shopping-cart' : ''}
                  />{' '}
                  {userInfo ? `CART` : `SIGN UP`}
                </StyledA>
                {userInfo ? (
                  <NavDropdown
                    title={userInfo.name}
                    id="username"
                    style={{ fontSize: 16 }}
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <>
                    <StyledA href="/login" className="navLinks">
                      <i className="fas fa-user" /> Login
                    </StyledA>
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
        </StyledNavbar>
      </header>
    </>
  );
};

export default Header;

const StyledNavbar = styled(Navbar)`
  background-color: ${DARK_BLUE_2};
`;

const StyledH1 = styled.h1`
  color: ${LIGHT_PEACH};
  padding: 0;
  margin: 0;
  font-size: 20px;
`;

const StyledA = styled.a`
  color: ${LIGHT_PEACH};
  marginright: 6;
  textdecoration: 'none';
  margin: 0 10px;
`;
