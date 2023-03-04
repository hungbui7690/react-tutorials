/*
  All the functions below are called Stateless Functional Components (SFC) > because they don't have state inside

  (***) we must return JSX (maybe empty tag > i.e: <h2></h2> > don't need the content, because if we don't return anything > error)
  
  ///////////////////////////////

  (***) JSX Rules 
  - always return single element > return () ở chỗ Greeting()
  - using semantic html > instead of using div, we use section/article
    >> instead of using div >> we can use <React.Fragment></React.Fragment> or <></> 
  - use camel case for html attribute
    + className instead of class
  - close every element 
  - formatting >> sử using return () > rounded brackets

  ////////////////////////////////

  *** Nested Components
  - Instead of using: 
      const Greeting = () => {
        return (
          <div>
            <h2>Hello There</h2>
            <p>Message</p>
          </div>
        )
      }
    
  We separated into multiple components : 
    const Greeting = () => {
      return (
        <div>
          <Title />
          <Message />
        </div>
      )
    }


  (***) Install React Dev Tools extension to debug the app
  
*/

import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Greeting = () => {
  return (
    <div>
      <Title />
      <Message />
    </div>
  )
}

function Title() {
  return <h2>Hello There</h2>
}

const Message = () => <p>This is the Message</p>

root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
)
