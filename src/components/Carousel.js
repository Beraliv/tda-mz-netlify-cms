import React, { useState } from 'react'

import SwipeableViews from 'react-swipeable-views'
import Pagination from './Pagination'
import LazyImage from './LazyImage'
import './Carousel.css'

const Carousel = ({ title, images }) => {
  const [index, setIndex] = useState(0)

  return (
    <div className='container'>
      <h1>{ title }</h1>
      <SwipeableViews index={index} onChangeIndex={setIndex}>
        {images.map((image, index) => (
          image && (
            <LazyImage
              key={`Carousel-${index}`}
              className='Carousel--Image'
              src={image}
              alt='Carousel--Image'
            />
          )
        ))}
      </SwipeableViews>
      {images && images.length > 1 && (
        <Pagination
          dots={images.length}
          index={index}
          onChangeIndex={setIndex}
        />
      )}
    </div>
  )
}

export default Carousel
