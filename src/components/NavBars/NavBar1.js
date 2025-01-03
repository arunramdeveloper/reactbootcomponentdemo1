import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SignIn from '../Login/Signin';


export default function NavBar1() {
    return (
      <> 
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap Demo</Navbar.Brand>          
              
          </Container>
        </Navbar>
        <Container >
              <SignIn />
        </Container>
        </>
      );
}