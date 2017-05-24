import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Apod from './Apod'
import apodApi from '../apodApi'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl = ''
    }
  }

  componentDidMount () {
    apodApi.getApod(() => )
  }

  getImgUrl () {
    console.log(apodApi.getApod(({url}) => {
      console.log('url: ' + url)
        return url
      })
    )
  }

  render () {
    return (
      <div>
        <Apod getImgUrl={() => this.getImgUrl()} />
      </div>
    )
  }
}
