import React, { Component } from 'react'

import NewsItems from './NewsItems';

export class News extends Component {
  render() {
    return (
      <div className="container my-4">
          <h2>PapaNews top Headlines</h2>
          <div className='row my-4'>
              <div className='col-md-4'>
                 <NewsItems title="my title" description="Hello How are you"/>
              </div>
              <div className='col-md-4'>
                 <NewsItems title="my title" description="Hello How are you"/>
              </div>
              <div className='col-md-4'>
                 <NewsItems title="my title" description="Hello How are you"/>
              </div>
          </div>
          
      </div>
    )
  }
}

export default News