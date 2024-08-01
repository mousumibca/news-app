import spinner from './load.gif'
import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt='spinner' width={`50rem`}/>
      </div>
    )
  }
}

export default Spinner
