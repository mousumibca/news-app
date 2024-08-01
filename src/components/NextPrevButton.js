//not use now
import React, { Component } from 'react'

export class NextPrevButton extends Component {
    handelPrev = async () => {
        console.log("prev");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ad5279a7ab642959efe6009f970cd9a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
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
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ad5279a7ab642959efe6009f970cd9a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          this.setState({ loading: true });
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
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handelPrev}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handelNext}>Next &rarr;</button>
        </div>
    )
  }
}

export default NextPrevButton
