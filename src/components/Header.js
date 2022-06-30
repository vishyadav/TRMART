import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import {NavLink} from 'react-bootstrap'


export default function Header() {
  return (
    <>
    <Navbar bg="light" className="shadow py-5" variant="light" style={{ height: "60px"}}>
      <Container>
          <NavLink to='/' className='me-3 d-none d-sm-block'><img src="https://townmart.in/Content/logo/TM-web.png" alt="" /></NavLink>
          <NavLink to="/" className="text-decoration-none text-success mx-3 d-none"><h2>TR <span className='text-danger'>Mart</span></h2></NavLink>
          <Nav className="md-ps-3 me-auto md-border-start">
              <NavLink to="/" className="text-decoration-none text-dark">
                  <strong>Delivery in 90 Minutes</strong><br />
                  <span className='text-muted overflow-hidden'>Khairatabad metro station, 500004</span>
              </NavLink>
          </Nav>
          <Nav className="me-auto d-none d-sm-block">
              <input type="text" style={{height:'45px', width:'400px'}} class="form-control" placeholder='What are you looking for?'/>
          </Nav>
          <Nav className='me-auto'>
              <navLink to='/' className='text-decoration text-dark'>
                  <strong><span className='d-none d-sm-block'>Acccount</span><i class="fa fa-user fs-3 d-block d-sm-none" aria-hidden="true"></i></strong>
              </navLink>
              
          </Nav>

      </Container>
    </Navbar>
    </>
  )
}

