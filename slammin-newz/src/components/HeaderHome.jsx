import React , { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class HeaderHome extends Component{
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
                </Navbar>
            </>
        )}
}