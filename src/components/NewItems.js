import React, { Component } from 'react'
import imageNotFound from './invalid_img.png'

export class NewItems extends Component {
  render() {
    let {Title,Description,imageUrl,newsUrl,author,date,source} = this.props;
    
    return (
      <div className='container'>
        <div className="card w-75">
          <img src={!imageUrl?`${imageNotFound}`:imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{Title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {source} </span></h5>
              <p className="card-text">{Description}...</p>
              <p className="card-text"><small className='text-muted'>by {!author?"Unknown":author} on {!date?"Date invalid":date}</small></p>
              <a href={newsUrl} target='blank' className="btn btn-primary btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewItems
