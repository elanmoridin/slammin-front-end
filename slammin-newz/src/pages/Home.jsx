import React from 'react'
import DailyNews from '../components/DailyNews'
import WeeklyNews from '../components/WeeklyNews'
import logo from '../graphics/daily-slam.png'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import { auth } from '../services/firebase'
import '../App.css'

export default class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        user: auth().currentUser,
      }
    }

    render() {
        return (
            <div>
                <Header />
            <div>
                {/* { */}
                {/* userName === null
                ?
                <Container>
                <img id='site-logo' src={logo} alt="Logo" className='center'/>
                <DailyNews />
                <WeeklyNews />
                </Container>
                : */}
                <Container>
                <img id='site-logo' src={logo} alt="Logo" className='center'/>
                <DailyNews />
                <WeeklyNews />
                </Container>
                {/* } */}
            </div>
            </div>
        )
    }
}
