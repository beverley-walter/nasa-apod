import React from 'react'

const Apod = ({getImgUrl, getExplanation, getMediaType}) => {
  return(
    <div>
      <h1>APOD</h1>
      <h3>Astronomy Picture Of the Day</h3>
        {(getMediaType() == 'video') ? displayVideo(getImgUrl) : displayImage(getImgUrl)}
        <h2>Explanation:</h2>
        <p>{getExplanation()}</p>
    </div>
  )
}

function displayVideo (getImgUrl) {
  return (
    <iframe width="960" height="670"
      src={getImgUrl()}>
    </iframe>
  )
}

function displayImage (getImgUrl) {
 return(
   <img src={getImgUrl()} />
 )
}

export default Apod
