import React , { Component } from 'react';

let serverURL = 'https://newsapi.org/v2/top-headlines?country=us' 
let wrestle = '&q=pro+wreslting&'
let dateMe = 'from=2020-08-06&'
let API_KEY = process.env.REACT_APP_EVENT_API
console.log(API_KEY)

export default class Events extends Component {

    constructor(props) {
        super(props)
        this.state = {
            eventlist: [],
        }
    }

    findNews = () => {
    fetch(serverURL + wrestle + dateMe + API_KEY).then(res => {
        return res.json();
    }).then(data => {
        this.setState({newslist: data})
    })
}

componentDidMount(){
}

    render() {
        return (
        <div>
            <h2>US Events</h2>
        </div>
        )}
    }
