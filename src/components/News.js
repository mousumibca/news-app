import React, { Component } from 'react'
import NewItems from './NewItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country: "in",
    PageSize: 8,
  }
  static ProtoTypes={
    country: PropTypes.string,
    PageSize: PropTypes.number,
  }
  articles =[
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "California Park Fire:  Rescuer ran 1.5 miles to save dogs",
        "description": "Trevor Skaggs ran 1.5 miles (2.4km) through the state's sprawling Park Fire to get to the animals.",
        "url": "https://www.bbc.co.uk/news/articles/c6p2mrr49mno",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2251/live/d57257a0-4db3-11ef-8f0f-0577398c3339.jpg",
        "publishedAt": "2024-07-29T14:52:13.8629273Z",
        "content": "After finding the animals, he fed them water and bites from his protein bar, before leading them back to the chopper.\r\nThe dogs were later flown to Chico Airport and are now in the care of the North … [+727 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Venezuela election: Choreographed celebrations as Nicolas Maduro claims victory",
        "description": "Maduro's supporters are jubilant but the opposition is demanding proof of the voting numbers.",
        "url": "https://www.bbc.co.uk/news/articles/c1dmv9jlvj1o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1461/live/2cf59e30-4dad-11ef-aebc-6de4d31bf5cd.jpg",
        "publishedAt": "2024-07-29T14:52:11.7833798Z",
        "content": "As the electoral authorities, which Nicolas Maduro controls, announced hed won a third term in office, an instant crackle of fireworks rippled around the Venezuelan Caracas.\r\nThe city soundtracked in… [+2114 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Bowen: Golan attack leaves border war's unspoken rules in tatters",
        "description": "How Israel retaliates could determine whether the conflict stays limited or explodes into something much worse.",
        "url": "https://www.bbc.co.uk/news/articles/c6p2j85k8dro",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d3b4/live/a15a71e0-4da0-11ef-ba3c-e10a62be783c.jpg",
        "publishedAt": "2024-07-29T14:07:16.4397628Z",
        "content": "Action against Hezbollah in the largely depopulated areas of south Lebanon might avoid escalation. Killing Lebanese civilians in Beirut or destroying infrastructure like bridges or power stations wou… [+2042 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Southport stabbing: Man held as eight taken to hospital",
        "description": "Eight have been taken to hospitals including Alder Hey which has declared a \"major incident\"",
        "url": "https://www.bbc.co.uk/news/articles/cql8j2j0304o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1f33/live/e0484100-4dac-11ef-aebc-6de4d31bf5cd.jpg",
        "publishedAt": "2024-07-29T13:37:21.0806017Z",
        "content": "A local business owner, who was one of the people who called the police, said the incident was like a \"scene in a horror movie.\"\r\nColin Parry, owner of Masters Vehicle Body Repairs on Hart Street, sa… [+240 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Biden calls for Supreme Court term limits and ethics rules",
        "description": "The US president's proposals are unlikely to pass Congress but the aim is to galvanise Democratic voters.",
        "url": "https://www.bbc.co.uk/news/articles/cw4yz3nw0vyo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d0f2/live/ce9992b0-4d9d-11ef-ba3c-e10a62be783c.jpg",
        "publishedAt": "2024-07-29T12:22:17.0801377Z",
        "content": "Democrats, however, hope that pushing for reform can help galvanise voters ahead of the November 2024 election. \r\nThe Supreme Court has ruled on a string of historic cases in the last two years, star… [+1284 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Man arrested in France over suspected railway vandalism",
        "description": "Police sources told local media the 28-year-old was found acting suspiciously near a railway site.",
        "url": "https://www.bbc.co.uk/news/articles/c903431qejqo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/535d/live/9c5c0380-4d90-11ef-a2f4-53168add8738.jpg",
        "publishedAt": "2024-07-29T11:22:19.7522974Z",
        "content": "The acts of sabotage paralysed high-speed TGV lines running to and from Paris and heavily disrupted travel in France.\r\nOn Monday morning, Frances Minister of the Interior Gerald Darmanin said that a … [+2122 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "North Korea: Thousands stranded as Kim declares 'emergency'",
        "description": "A photograph taken by state media shows Kim Jong Un travelling through a flooded area in a Lexus.",
        "url": "https://www.bbc.co.uk/news/articles/c84jnn9llgzo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/04e3/live/4dc8b0a0-4d82-11ef-b2d2-cdb23d5d7c5b.jpg",
        "publishedAt": "2024-07-29T08:22:16.1272071Z",
        "content": "The secretive state - which is perhaps better known for concealing negative issues happening within its borders to the outside world - appears to have been relatively open about this latest disaster,… [+1216 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Mum jailed for forcing daughter into fatal marriage in Australia",
        "description": "Sakina Muhammad Jan is the first person in Australia to be jailed over its forced marriage laws.",
        "url": "https://www.bbc.co.uk/news/articles/cx72ll7460vo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5170/live/6d87a810-4d64-11ef-8ce2-ade40fd42703.jpg",
        "publishedAt": "2024-07-29T06:22:17.9548412Z",
        "content": "Forced marriage laws were introduced in Australia in 2013 and carry a maximum penalty of seven years imprisonment. There are several cases pending, but Jan is the first person to be sentenced for the… [+1656 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Bob Ballard: Olympics commentator axed over sexist remark",
        "description": "Bob Ballard was referencing the Australian women's swimming team who had won gold in a freestyle relay.",
        "url": "https://www.bbc.co.uk/news/articles/cprq880yz0xo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/010c/live/9d843f60-4d5a-11ef-b2d2-cdb23d5d7c5b.jpg",
        "publishedAt": "2024-07-29T04:37:16.0325152Z",
        "content": "Mollie OCallaghan, Emma McKeon, Meg Harris and Shayna Jack won gold at the women's 4x100 meter freestyle relay on Saturday. \r\nThey were making their way out of the Paris Aquatic Centre when Mr Ballar… [+917 chars]"
      },
    ]
  constructor() {
    super()
    console.log("hello")
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ad5279a7ab642959efe6009f970cd9a&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
  }
  handelPrev = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ad5279a7ab642959efe6009f970cd9a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    })
  }
  handelNext = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      console.log("prev");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ad5279a7ab642959efe6009f970cd9a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      })
    }
  }
  

  render() {
    return (
      <div className='container my-3'>
        
        <div className='text-center'>
        <h2>NEW ITEMS 24/7</h2>
        {this.state.loading && <Spinner/>}
        </div>
        <div className="row" >
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
              <NewItems Title={element.title ? element.title.slice(0, 35) : ""} Description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handelPrev}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handelNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
