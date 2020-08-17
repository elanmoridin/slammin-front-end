import React , { Component } from "react"
import { auth } from '../services/firebase'
import { db } from '../services/firebase'
// couldn't get logout function to migrate from auth file
// no longer needed as it's handled by nav bar
// import { handleLogOut } from '../helpers/auth'
import Header from '../components/Header'
import { Container, Button, Form } from 'react-bootstrap'


export default class Chat extends Component {
    constructor(props) {
      super(props)
      this.state = {
          user: auth().currentUser,
          chats: [],
          content: '',
          readError: null,
          writeError: null,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    //   this.handleLogOut = this.handleLogOut.bind(this)
    }
// event handler for typing in box
handleChange(event) {
    this.setState({
        content: event.target.value
    })
}

// handle submit button takes content from box and pushes it to db along with a timestamp and a user uid from the logged in user and then sets the content state to '' so the box is cleared
async handleSubmit(event) {
    event.preventDefault()
    this.setState({ writeError: null })
    try {
        await db.ref("chats").push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user.uid,
            user: auth().currentUser.email,
        })
        this.setState({ content: '' })
    } catch (error) {
        this.setState({ writeError: error.message })
    }
}

// when component mounts it takes the chat history from the database and pushes it into the state of chats array then displays that array --- this allows close to real time showing of chats
async componentDidMount(){
    this.setState({ readError: null})
    try {
        db.ref("chats").on("value", chathistory => {
            let chats = []
            chathistory.forEach((chat) => {
                chats.push(chat.val())
            })
            this.setState({ chats })
            // testing auth object
            console.log(auth().currentUser)
        })
    } catch (err) {
        this.setState({ readError: err.message })
    }
}

    render() {
        return (
            <>
            <Header />
            <br></br><br></br>
                <Container className="chats">
                    {this.state.chats.map(chat => {
                        return( 
                            <div key={chat.timestamp}>{auth().currentUser.uid === chat.uid
                            ? <div className='clearfix'><div id='chat-bubbles' className='right-chat'><p>{chat.content}</p></div><br></br><br></br><br></br><br></br><br></br><br></br></div>
                            : <div className='clearfix'><div key={chat.timestamp}><div id='chat-bubbles' className='left-chat'><p>{chat.content}</p></div><br></br></div></div>
                            }</div>)
                    })}
                </Container>
              <br></br>
              <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="textarea">
                    <Form.Control onChange={this.handleChange} value={this.state.content} as='textarea' rows='3' placeholder='Type a message...'></Form.Control>
                {/* for testing state errors before finishing
                {this.state.error ? <p>{this.state.writeError}</p> : null} */}
                    <Button variant='success' type="submit">Send</Button>
                </Form.Group>
              </Form>
              </Container>
              {/* not longer need this as handled by navbar
                <div>
                Login in as: <strong>{this.state.user.email}</strong>
              </div> */}
              {/* don't need logout here as nav bar is working
              <button onClick={handleLogOut}>Logout</button> */}
            </>
          )
        }
}
