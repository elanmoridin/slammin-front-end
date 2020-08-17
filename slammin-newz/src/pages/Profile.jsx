import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import coming_soon from '../graphics/comic-bub.png'

export default class Profile extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render() {
        return (
            <>
                <Header />
                <Container className='themed-container' fluid='md'>
                    <h1 id='log-in' className='center'>Profiles with Bookmarks are coming soon!</h1>
                    <img alt='coming soon banner' id='coming-soon' src={coming_soon} width='300 px'/>
                </Container>
            </>
        )
    }
}