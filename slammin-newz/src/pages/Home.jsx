import React from 'react'
import USNews from '../components/USNews'
import WorldNews from '../components/WorldNews'
import logo from '../graphics/daily-slam.png'

export default class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }


    render() {
        return (
            <div>
            <img src={logo} alt="Logo" />
            <USNews />
            <WorldNews />
            </div>
        )
    }
}
