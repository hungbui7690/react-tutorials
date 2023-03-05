/*
  (***) From now on, we use Vite instead of create-react-app to create react project 
    > faster 

//////////////////////////////////////////////////

  Menu: 
  - Pic: menu-demo
  - Images: in public folder

  Different between putting images in /public and /src folder 
    > public/images/img1.jpg > less performant > we won't do it in real projects
      + with this one, we don't have to import, just put the the image url in the image tag
        > <img src="./images/img1.jpg" />
        > publicly available > we can go to http://localhost:3000/images/img1.jpg and get the image 

    > src/images/imgX.png > better solutions for assets, since under the hood they get optimized by react
      + with this, we need to import the image first, then set it as the src attribute of the image
        > import imgX from './images/imgX.png'
        > <img src={imgX} />

  

*/

import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  return <h1>Menu</h1>
}

export default App
