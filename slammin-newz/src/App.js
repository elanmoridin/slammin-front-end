import React from 'react'
// left over from planning
// import Rebase from 're-base'
import { 
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth } from './services/firebase.js'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chat from './pages/Chat'
import PasswordReset from './pages/PasswordReset'
import { ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// css-tricks building app with firebase
// this function recieves 3 props - the component to render if true, the authenticated state and spread operator to get the rest of the params from the router. It checks if authenticated is true and renders the components passed or it redirects to login page
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

// same as private route but redirects to profile is authenticated state becomes true
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}


// setting initial state of app to not authenticated
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      // shows loading in top left corner as page loads
      loading: true,
    }
  }

  // using component did mount hook to check if authenticated -- see react documentation -- reactjs.org/docs/state-and-lifecycle.html -- shows loading screen as authentication check happens
componentDidMount() {
  auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        authenticated: true,
        loading: false,
      })
    } else {
      this.setState({
        authenticated: false,
        loading: false,
      })
    }
  })
}

  render() {
    // if state is set to loading then show loading while component mounts and when it mounts the state is set to false and the page shows
    return this.state.loading === true ? <ProgressBar animated now={85} /> : (
      // router dom for react uses routes to switch components based on authitication
      <Router>
        <Switch>
          <Route exact path="/" showNav={this.state.showNav} component={Home}></Route>
          <PrivateRoute path="/profile" authenticated={this.state.authenticated} component={Profile}></PrivateRoute>
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
          <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat}></PrivateRoute>
          <PublicRoute path="/passwordreset" authenticated={this.state.authenticated} component={PasswordReset}></PublicRoute>
        </Switch>
      </Router>
    )
  }
}

export default App
