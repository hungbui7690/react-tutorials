/*
  Suspense API
  - And now let's see how we can do code splitting in React, which in turn will allow us to progressively load or lazy load our application. 
  - Before we take a look at the code. Let's discuss the main benefits of such approach:
    + First, improve performance by splitting up a code into smaller, more manageable chunks.
      > We can reduce the size of the initial JavaScript payload that needs to be loaded.
      > This results in faster load times, and improved performance, especially on slow networks or low end devices.
    + Second, better user experience with code splitting, only the essential code needed for the initial render of your application is loaded. The remaining code is loaded as the user interact with your application leading to a smoother, less blocking user experience.
      > You see, especially when it comes to bigger projects, not all the pages and components are equal, meaning there are certain resources that are used more often by the users. 
      > For example, typically, which page do you think gets more traffic? The homepage or the contact page. So million dollar question. If some resources are used less often than the other ones, does it make sense to jam all of that code, when we initially ship our application to the browser? > Because keep in mind, the more code we send, the more time it will take for the browser to compile it, which in turn will affect how fast the user can interact with our application.
  - So wouldn't it be nice if we could prioritize the important resources over the less important ones?
  - In order to lazy load our components or progressively load our application, we'll use a tool called suspense.


  - The Suspense API is a feature in React that allows you to manage the loading state of your components. It provides a way to "suspend" rendering of a component until some data has been fetched, and display a fallback UI in the meantime. This makes it easier to handle asynchronous data loading and provide a smooth user experience in your React application.
    > right now, just the split code feature is supported 
    > data fetching is now in experimental

  
  (1) LatestReact.jsx
    > there's no guarantee that user click the "Show/Hide" button > but everything needs to be loaded in initial render

*/

import React from 'react'
import LatestReact from './LatestReact'

const App = () => {
  return <LatestReact />
}

export default App
