import React from 'react'
import "./ImagesList.css"

function ImagesList({imagesList, activeImage}) {

  const {id, imageUrl, tab} = imagesList

  const selectImage = () =>{
    activeImage(id)
  }

  return (
    <li onClick={selectImage}><img className='image-thumbnail' src={imageUrl} alt={tab}/></li>
  )
}

export default ImagesList