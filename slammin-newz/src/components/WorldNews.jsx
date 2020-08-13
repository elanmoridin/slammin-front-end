import React , { Component } from 'react'
// import axios for the api call we use
import axios from 'axios'

// google news api endpoint for everything
let serverURL = 'https://newsapi.org/v2/everything?' 
// the call for pro wreslting articles attaches to endpoint call
let wrestle = 'q=professional+wrestling&'
// grab today's longform date
let todayDate = new Date()
// grab today's date in YEAR-MONTH-DAY form for the axios call
let date = todayDate.getFullYear() + '-' + todayDate.getMonth() + '-' + todayDate.getDate()
// breaking down the date call into from which comes before the date
let dateMeFrom = 'from='
// and call comes after the date
let dateMeAnd = '&'
// env api key
let API_KEY = process.env.REACT_APP_NEWS_API
// testing api key with env variable
// console.log(API_KEY)

export default class WorldNews extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // set world news list to null to start for page load
            worldnewslist: null
        }
        this.findNews = this.findNews.bind(this)
    }

// old fetch call before switching to axios call
    findNews = () => {
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-host", "newscatcher.p.rapidapi.com");
myHeaders.append("x-rapidapi-key", "NO_WAY_JOSE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://newscatcher.p.rapidapi.com/v1/search_free?media=True&lang=en&q=professional%20wrestling", requestOptions)
  .then(res => res.json())
  .then(result => {
    console.log(result)
    const worldnewslist = result
    this.setState({worldnewslist: worldnewslist.articles})
  })

  .catch(error => console.log('error', error));
    }

    componentDidMount(){
        this.findNews()
    // // api call to the google news api with all the variables from up top to create the query string
    // axios.get(serverURL + wrestle + dateMeFrom + date + dateMeAnd + API_KEY)
    //   .then(res => {
    //     // create worldnews arry on mount that can hold the news calls
    //     const worldnewslist = res.data;
    //     // testing the date variable calls
    //     // console.log(date)
    //     // sets the array to the data.articles to allow mapping over it with react
    //     this.setState({ worldnewslist: worldnewslist.articles });
    //   })
    }

    render() {
        return (
        <div>
            {/* return world news */}
            <h2>World News</h2>
            {
                // if world news is null then it lists nothing
                this.state.worldnewslist == null
                ?
                <></>
                :
                // else it maps the array and pulls out the info to display it
                this.state.worldnewslist.map(news => {
                    return (
                        <div id={news.id}className="world-news">
                            <h4>{news.title}</h4>
                            <h5>The Author is: {news.author}</h5>
                            <p>{news.summary}</p>
                            <a href={news.link}>Link to Article</a>
                        </div>
                    )
                })
            } 
        </div>
        )}
    }


// author, content, description, title, url, urlToImage -- what I want to use for the news pulls
