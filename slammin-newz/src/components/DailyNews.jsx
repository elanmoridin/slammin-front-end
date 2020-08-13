import React , { Component } from 'react'

// let serverURL = 'https://newsapi.org/v2/top-headlines?country=us' 
// let wrestle = '&q=pro+wreslting&'
// let dateMe = 'from=2020-08-12&'
// let API_KEY = process.env.REACT_APP_NEWS_API

let todayDate = new Date()
let theDate = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1)+ '-' + todayDate.getDate()

export default class DailyNews extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dailynewslist: null,
        }
    }

    findNews = () => {
        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-host", "newscatcher.p.rapidapi.com");
        myHeaders.append("x-rapidapi-key", process.env.REACT_APP_NEWSCATCHER);
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://newscatcher.p.rapidapi.com/v1/search?media=True&sort_by=relevancy&lang=en&page=1&q=professional%20wrestling&from=" + theDate, requestOptions)
        .then(res => res.json())
        .then(result => {
          console.log(result)
          console.log(theDate)
          const dailynewslist = result
          this.setState({dailynewslist: dailynewslist.articles})
        })
      
        .catch(error => console.log('error', error));
          }

componentDidMount(){
    this.findNews()
}

    render() {
        return (
            <div>
            {/* return weekly news */}
            <h2>Daily News</h2>
            {
                // if weekly news is null then it lists nothing
                this.state.dailynewslist == null
                ?
                <></>
                :
                // else it maps the array and pulls out the info to display it
                this.state.dailynewslist.map(news => {
                    return (
                        <div id={news.id} className="daily-news">
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
