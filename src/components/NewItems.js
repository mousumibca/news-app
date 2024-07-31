import React, { Component } from 'react'
import imageNotFound from './invalid_img.png'

export class NewItems extends Component {
  render() {
    let {Title,Description,imageUrl,newsUrl} = this.props;
    
    return (
      <div className='container'>
        <div className="card w-75">
          <img src={!imageUrl?`${imageNotFound}`:imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{Title}...</h5>
              <p className="card-text">{Description}...</p>
              <a href={newsUrl} target='blank' className="btn btn-primary btn-dark">Read More</a>
            </div>
        </div>

      </div>
    )
  }
}

export default NewItems
