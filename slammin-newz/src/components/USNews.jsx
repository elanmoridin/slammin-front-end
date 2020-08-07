import React , { Component } from 'react';

let serverURL = 'https://newsapi.org/v2/top-headlines?country=us' 
let wrestle = '&q=pro+wreslting&'
let dateMe = 'from=2020-08-06&'
let API_KEY = process.env.REACT_APP_NEWS_API
console.log(API_KEY)

export default class USNews extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newslist: [],
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
    this.findNews()
}

    render() {
        return (
        <div>
            <h2>US News</h2>
        </div>
        )}
    }
