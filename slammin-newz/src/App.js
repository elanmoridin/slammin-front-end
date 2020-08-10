import React from 'react';
import Rebase from 're-base';
import { 
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth } from './services/firebase.js';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import './App.css';

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
        : <Redirect to='/profile' />}
    />
  )
}


// setting initial state of app to not authenticated
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
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
    return this.state.loading === true ? <h2>Loading...</h2> : (
      // router dom for react uses routes to switch components based on authitication
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute path="/profile" authenticated={this.state.authenticated} component={Profile}></PrivateRoute>
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
        </Switch>
      </Router>
    )
  }
}

export default App;
