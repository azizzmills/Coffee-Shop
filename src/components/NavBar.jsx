import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import './NavBar.css'
import Logo from '../images/logo - Copy.jpg'


const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container d-flex justify-content-center align-items-center>
        <Image src={Logo} style={{ width:'70px', height:'70px'}} />
        <Navbar.Brand>Mills'Coffee N Chill</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default NavBar;