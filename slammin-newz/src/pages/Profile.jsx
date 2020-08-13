import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import { handleLogOut } from '../helpers/auth'

export default class Profile extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1>This is my profile!</h1>
                    <Link to="/">
                    News Page
                    </Link>
                    <button onClick={handleLogOut}>Logout</button>
                </Container>
            </div>
        )
    }
}