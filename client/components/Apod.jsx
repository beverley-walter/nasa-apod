import React from 'react'

const Apod = ({getImgUrl}) => {
  return(
    <div>
      <h1>APOD</h1>
      <p>url: {getImgUrl()}</p>
    </div>
  )
}

export default Apod
