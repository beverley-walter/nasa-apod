import React from 'react'

const Apod = ({getImgUrl, getExplanation}) => {
  return(
    <div>
      <h1>APOD</h1>
        <iframe width="420" height="315"
          src={getImgUrl()}>
        </iframe>
        <h2>Explanation:</h2>
        <p>{getExplanation()}</p>
    </div>
  )
}

export default Apod
