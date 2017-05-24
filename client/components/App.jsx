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
    this.setPictureEachDay()
  }

  setCurrentPicture () {
console.log('Are you entering this func?');
    apodApi.getApod((error, body) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({imgUrl: body.url, expl: body.explanation})
      }
    })
  }

  setPictureEachDay () {
    console.log('hi')
    apodApi.getApod((error, body) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({imgUrl: body.url, expl: body.explanation})
        setTimeout(() => {this.setPictureEachDay()}, 800)
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
