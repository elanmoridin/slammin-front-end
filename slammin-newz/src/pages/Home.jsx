import React from 'react'
import DailyNews from '../components/DailyNews'
import WeeklyNews from '../components/WeeklyNews'
import logo from '../graphics/daily-slam.png'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import '../App.css'

export default class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }


    render() {
        return (
            <div>
                {
                this.props.showNav === true
                ?
                <Container>
                <Header />
                <img id='site-logo' src={logo} alt="Logo" className='center'/>
                <DailyNews />
                <WeeklyNews />
                </Container>
                :
                <Container>
                <img id='site-logo' src={logo} alt="Logo" className='center'/>
                <DailyNews />
                <WeeklyNews />
                </Container>
                }
            </div>
        )
    }
}
