import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../helpers/auth'
import { signInWithGoogle } from '../helpers/auth'
import { Form, Button, Container } from 'react-bootstrap'
import Header from '../components/Header'

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
        };
        this.handleChange = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.googleSignIn = this.googleSignIn.bind(this)
        }
// two handlers one for password and one for email for bootstrap integraton  
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

// functon that signs up with email and sets state to current email
    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        try {
          await signup(this.state.email, this.state.password);
        } catch (error) {
          this.setState({ error: error.message });
        }
    }
// google sign in function
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
            <Container className='theme-container' fluid='md'>
            <Form onSubmit={this.handleSubmit}>
              <h1 id='log-in' className='center'>
                Sign Up for: <Link to="/">Slammin Newz</Link>
              </h1>
              <p className='center'>Fill in the form below to create an account:</p>
              <Form.Group controlId='formGroupEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control placeholder="Email" name="email" type="email" onChange={this.handleChangeEmail} value={this.state.email}></Form.Control>
              </Form.Group>
              <Form.Group controlId='formGroupPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Password" name="password" onChange={this.handleChangePassword} value={this.state.password} type="password"></Form.Control>
              </Form.Group>
                <Button variant='warning' type="submit">Sign Up</Button>
                <Button variant='success' onClick={this.googleSignIn} type="button">
                    Sign in with Google
                </Button>
              <hr />
              <p>Already have an account? <Link to="/login"><Button variant='info' type='button'>Sign In Here</Button></Link></p>
            </Form>
            </Container>
          </>
        )
    }
}