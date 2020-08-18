import React , { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { auth } from '../services/firebase'
import { Form, Button } from 'react-bootstrap'
import { handleLogOut } from '../helpers/auth'
import { Link } from 'react-router-dom'

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
                        {/* <Navbar.Text> */}
                            <Nav.Link href="/">News</Nav.Link>
                        {/* </Navbar.Text> */}
                        {/* <Navbar.Text> */}
                            <Nav.Link href="/chat">Chat</Nav.Link>
                        {/* </Navbar.Text>  */}
                        {/* <Navbar.Text> */}
                            <Nav.Link href="/profile">Profile</Nav.Link>
                        {/* </Navbar.Text> */}
                    </Nav>
                    <Form inline>
                    <Navbar.Text className="mr-sm-2">
                            {auth().currentUser === null 
                            ? <></>
                            : <h5 className='sign-in-name'>Signed in as: {auth().currentUser.email}</h5>
                            }
                    </Navbar.Text>
                    {auth().currentUser === null 
                            ? <Link to="/login"><Button variant='outline-light' type='button'>Sign In Here</Button></Link>
                            : <Button onClick={handleLogOut} variant="outline-light">Logout</Button>
                            }
                    </Form>
                </Navbar>
            </>
        )}
}