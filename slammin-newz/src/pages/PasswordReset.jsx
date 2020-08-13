import React, { Component } from "react";
import { Link } from "react-router-dom";
import { passwordReset } from "../helpers/auth"

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
      <div>
        <form
          onSubmit={passwordReset}
        >
          <h1>
            Forgot Password to
            <Link to="/">
              Slammin Newz
            </Link>
          </h1>
          <p>
            Enter email to get password reset link
          </p>
          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Forgot Password</button>
          </div>
        </form>
      </div>
    )
  }
}