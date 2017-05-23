import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Apod from './Apod'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Apod} />
    </Router>
  )
}

export default App
