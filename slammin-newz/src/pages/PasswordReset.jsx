import React, { Component } from "react";
import { Link } from "react-router-dom";
import { passwordReset } from "../helpers/auth"
import { Form, Button, Container } from 'react-bootstrap'
import Header from '../components/Header'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <>
      <Header />
      <Container className='themed-container' fluid='md'>
        <form
          onSubmit={passwordReset}
        >
          <h1 id='log-in' className='center'>
            Forgot Password to: <Link to="/">Slammin Newz</Link>
          </h1>
          <p>
            Enter email to get reset password email.
          </p>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email'
              placeholder="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
              </Form.Group>
          <div>
            <Button variant='danger' type="submit">Forgot Password</Button>
          </div>
        </form>
      </Container>
      </>
    )
  }
}