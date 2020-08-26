import React, { Component } from "react"
import { Link } from "react-router-dom"
import { signin, signInWithGoogle } from "../helpers/auth"
import Header from "../components/Header"
import {Container, Form, Button} from 'react-bootstrap'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: ""
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.googleSignIn = this.googleSignIn.bind(this)
  }

// two handlers -- one for password and one for email for bootstrap integraton

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

// using async to try and catch errors more succinctly
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  // google sign in function from firebase documentation 
  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
        <>
        <Header />
        <Container className='themed-container' fluid='md'>
        <Form
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <h1 id='log-in' className='center'>
            Login to:  <Link to="/">Slammin Newz</Link>
          </h1>
          <p className='center'>Fill in the form to log in:</p>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter Email' onChange={this.handleChangeEmail} value={this.state.email}/>
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Enter Password' onChange={this.handleChangePassword} value={this.state.password}/>
            </Form.Group>
            <Button variant='info' type="submit" >Login to Account</Button>  
          <Link to="/passwordreset"><Button variant='danger' >Forgot Password</Button></Link>  
          <Button variant='success' onClick={this.googleSignIn} type="button">
                    Sign in with Google
          </Button>  
          <hr />
          <p>Don't have an account? <Link to="/signup"><Button variant='warning'>Sign Up</Button></Link>
          </p>
          </Form>
      </Container>
      </>
    )
  }
}