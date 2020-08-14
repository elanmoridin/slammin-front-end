import React from 'react'
import DailyNews from '../components/DailyNews'
import WeeklyNews from '../components/WeeklyNews'
import logo from '../graphics/daily-slam.png'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import firebase from 'firebase'
import '../App.css'

var userName = firebase.auth().currentUser

export default class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
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
