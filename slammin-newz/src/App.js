import React from 'react';
import USNews from './components/USNews.jsx'
import WorldNews from './components/WorldNews.jsx'
import logo from './graphics/daily-slam.png'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showUsNews: -1,
      showWorldNews: -1,
    }
  }
  render() {
    return (
      <div>
        <img src={logo} alt="Logo" />
        <USNews />
        <WorldNews />
      </div>
    )}
}

export default App;
