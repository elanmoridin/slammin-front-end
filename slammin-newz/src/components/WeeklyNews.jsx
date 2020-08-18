import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
// old api calls from google news
// import axios for the api call we use
// import axios from 'axios'

// google news api endpoint for everything
// let serverURL = 'https://newsapi.org/v2/everything?'
// the call for pro wreslting articles attaches to endpoint call
// let wrestle = 'q=professional+wrestling&'
// grab today's longform date
// let todayDate = new Date()
// grab today's date in YEAR-MONTH-DAY form for the axios call
// let date = todayDate.getFullYear() + '-' + todayDate.getMonth() + '-' + todayDate.getDate()
// breaking down the date call into from which comes before the date
// let dateMeFrom = 'from='
// and call comes after the date
// let dateMeAnd = '&'
// env api key
// let API_KEY = process.env.REACT_APP_NEWS_API
// testing api key with env variable
// console.log(API_KEY)

export default class WeeklyNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // set world news list to null to start for page load
      weeklynewslist: null,
    };
    this.findNews = this.findNews.bind(this);
  }

  // old fetch call before switching to axios call
  findNews = () => {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "newscatcher.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", process.env.REACT_APP_NEWSCATCHER);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://newscatcher.p.rapidapi.com/v1/search_free?media=True&lang=en&q=professional%20wrestling",
      requestOptions,
    )
      .then((res) => res.json())
      .then((result) => {
        // console logged result for testing
        // console.log(result)
        const weeklynewslist = result;
        this.setState({ weeklynewslist: weeklynewslist.articles });
      })
      .catch((error) => console.log("error", error));
  };

  componentDidMount() {
    this.findNews();
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
      <Container>
        {/* return weekly news */}
        <h1 id="weekly-news">Weekly News</h1>
        {// if weekly news is null then it lists nothing
        this.state.weeklynewslist == null ? <></> : // else it maps the array and pulls out the info to display it
          this.state.weeklynewslist.map(function (news) {
            return (
              ["Dark"].map((variant, idx) => (
                <Card
                  bg={variant.toLowerCase()}
                  key={idx}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  //   style={{ width: '85%' }}
                  className="mb-2"
                >
                  <Card.Header>Published: {news.published_date}</Card.Header>
                  <Card.Body>
                    <Card.Title>{variant}{news.title}</Card.Title>
                    <Card.Text>
                      {news.summary}
                      <br></br>
                      <br></br>
                      <a
                        target="_blank"
                        href={news.link}
                        rel="noopener noreferrer"
                      >
                        <Button variant="light">Link to Article</Button>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
              // old mapping with no cards

              // <div key={i} className="weekly-news">
              //     <h4>{news.id}</h4>
              //     <h4>{news.title}</h4>
              //     <h5>The Author is: {news.author}</h5>
              //     <p>{news.summary}</p>
              //     <a href={news.link}>Link to Article</a>
              // </div>
            );
          })}
      </Container>
    );
  }
}

// author, content, description, title, url, urlToImage -- what I want to use for the news pulls
