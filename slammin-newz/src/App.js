import React from 'react';
import USNews from './components/USNews.jsx'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <USNews />
      </div>
    )}
}

export default App;
