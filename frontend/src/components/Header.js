import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
          <Container fluid>
            <LinkContainer to='/'>
              <Navbar.Brand className="ml-10">Pasali</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <LinkContainer to='/cart'>
                  <Nav.Link href="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link href="/login"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </header>
  )
}

export default Header