import React , { Component } from 'react';
import axios from 'axios';

let serverURL = 'https://newsapi.org/v2/everything?' 
let wrestle = 'q=professional+wrestling&'
let dateMe = 'from=2020-08-12&'
let API_KEY = process.env.REACT_APP_NEWS_API
console.log(API_KEY)

export default class WorldNews extends Component {

    constructor(props) {
        super(props)
        this.state = {
            worldnewslist: null
        }
    }

    // findNews = () => {
    // fetch(serverURL + wrestle + dateMe + API_KEY).then(res => {
    //     return res.json();
    // }).then(data => {
    //     this.setState({worldnewslist: data})
    // })
    // }

    componentDidMount(){
    axios.get(serverURL + wrestle + dateMe + API_KEY)
      .then(res => {
        const worldnewslist = res.data;
        this.setState({ worldnewslist: worldnewslist.articles });
      })
    }

    render() {
        return (
        <div>
            <h2>World News Goes Here</h2>
            {
                this.state.worldnewslist == null
                ?
                <></>
                :
                this.state.worldnewslist.map(news => {
                    return (
                        <div className="world-news">
                            <h4>{news.title}</h4>
                            <h5>The Author is: {news.author}</h5>
                            <p>{news.content}</p>
                            <a href={news.url}>
                            <img alt="Link" src={news.urlToImage}/></a>
                        </div>
                    )
                })
            } 
        </div>
        )}
    }


// author, content, description, title, url, urlToImage