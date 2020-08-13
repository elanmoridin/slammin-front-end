import React from 'react'
import DailyNews from '../components/DailyNews'
import WeeklyNews from '../components/WeeklyNews'
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
            <DailyNews />
            <WeeklyNews />
            </div>
        )
    }
}
