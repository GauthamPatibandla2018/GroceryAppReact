import React from 'react'
import Products from './Products'
const foodImage = require('./../Assets/food1.jpeg')

export default function Home() {
  return (
    <div>
      <img src={foodImage} />
       <Products></Products>
    </div>
  )
}
