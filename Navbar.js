import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';

export const Navbar = () => {
    const { activeLink, setActiveLink } = useState('home');
    const { scolled, seScrolled } = useState(false);

    useEffect({} => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
}, [])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap
                <img src={''} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <span className='navbar-toggler-icon'></span>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' onClick={} => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#Skills"  className={activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link' onClick={} => onUpdateActiveLink('skil')}>Skills</Nav.Link>
                    <Nav.Link href="#Projects"  className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link' }>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social icon'>
                        <a href='#'><img src={''} alt="" /></a>
                        <a href='#'><img src={''} alt="" /></a>
                        <a href='#'><img src={''} alt="" /></a>
                    </div>
                    <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
    }