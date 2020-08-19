import React , { Component } from 'react'
import Container from 'react-bootstrap/Container'
import {Badge} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
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
        //   testing date and results 
        //   console.log(result)
        //   console.log(theDate)
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
            <Container>
            {/* return weekly news */}
            <h1 id='daily-news'>Daily News <Badge id='new-news' pill variant="success">New</Badge></h1>
            {
                // if weekly news is null then it lists nothing
                this.state.dailynewslist == null
                ?
                <></>
                :
                // else it maps the array and pulls out the info to display it
                this.state.dailynewslist.map(function(news, i) {
                    return (
                        ['Dark'].map((variant, idx) => (
                            <Card
                              bg={variant.toLowerCase()}
                              key={idx}
                              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            //   style={{ width: '85%' }}
                              className="mb-2"
                            >
                              <Card.Header>Published: {news.published_date}</Card.Header>
                              <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text>
                                  {news.summary}<br></br><br></br>
                                  <a target="_blank" href={news.link} rel="noopener noreferrer"><Button variant="light">Link to Article</Button></a>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          ))

                        // old return mapping with no card style
                        
                        // <div key={i} className="daily-news">
                        //     <h4>{news.title} <Badge variant="secondary">New</Badge></h4>
                        //     <h5>The Author is: {news.author}</h5>
                        //     <p>{news.summary}</p>
                        //     <a href={news.link}>Link to Article</a>
                        // </div>
                    )
                })
            } 
            </Container>
        )}
    }
