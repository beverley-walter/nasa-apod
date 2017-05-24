import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Apod from './Apod'
import apodApi from '../apodApi'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: ''
    }
  }

  componentDidMount () {
    apodApi.getApod((error, body) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({imgUrl: body.url})
      }
    })
  }

  getImgUrl () {
    return this.state.imgUrl
  }

  render () {
    return (
      <div>
        <Apod getImgUrl={() => this.getImgUrl()} />
      </div>
    )
  }
}
