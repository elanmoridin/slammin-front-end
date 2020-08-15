import React, { Component } from "react"
import { Link } from "react-router-dom"
import { signin, signInWithGoogle } from "../helpers/auth"
import Header from "../components/Header"
import {Container, Form} from 'react-bootstrap'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.googleSignIn = this.googleSignIn.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
  }

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

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

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
          <p className='center'>
            Fill in the form to sign up:
          </p>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter Email' onChange={this.handleChangeEmail} value={this.state.email}/>
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Enter Password' onChange={this.handleChangePassword} value={this.state.password}/>
            </Form.Group>
            {this.state.error ? (
              <p>{this.state.error}</p>
            ) : null}
            <button type="submit">Login</button>
          <p><Link to="/passwordreset">Forgot Password</Link></p>
          <button onClick={this.googleSignIn} type="button">
                    Sign in with Google
          </button>
          <hr />
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          </Form>
      </Container>
      </>
    )
  }
}