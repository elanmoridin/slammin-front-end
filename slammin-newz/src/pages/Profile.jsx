import React from 'react'
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
                <h1>This is my profile!</h1>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        )
    }
}