import React from 'react'
import { Link } from 'react-router-dom'
import '../../Pages/HomePage/Home.css'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar style={{ backgroundColor: 'rgb(218, 213, 213)', height: '60px' }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/" style={{ color: 'black' }}>Upayment Store</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/">Register</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
