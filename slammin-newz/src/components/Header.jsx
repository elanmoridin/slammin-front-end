import React , { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { auth } from '../services/firebase'

export default class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">News</Nav.Link>
                    <Nav.Link href="/chat">Chat</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                    <Navbar.Text className="navbar-right">
                            {auth().currentUser === null 
                            ? <></>
                            : <p>Signed in as: {auth().currentUser.email}</p>
                            }
                    </Navbar.Text>
                </Navbar>
            </>
        )}
}