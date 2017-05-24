import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Apod from './Apod'
import apodApi from '../apodApi'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: '',
      expl: ''
    }
  }

  componentDidMount () {
    this.setImageDaily()
  }

  setImageDaily () {
    apodApi.getApod((error, body) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({imgUrl: body.url, expl: body.explanation})
        setTimeout(() => {this.setImageDaily()}, 86400000)
      }
    })
  }

  getExplanation () {
    return this.state.expl
  }
  
  getImgUrl () {
    return this.state.imgUrl
  }

  render () {
    return (
      <div>
        <Apod getImgUrl = {() => this.getImgUrl()} getExplanation = {() => this.getExplanation()} />
      </div>
    )
  }
}
