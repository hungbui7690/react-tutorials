/*
  - React.useState() >> viết kiểu này thì ko cần import 
    > nếu xài nhiều thì import, ko thì làm trực tiếp như vậy cũng đc

  - khi sử dụng onClick với các function có parameter thì sử dụng arrow function 
    > nếu sử dụng cách bình thường (tức là ko có arrow function) >> sẽ báo lỗi
*/

import React from 'react'
import { data } from './data' // (***)

const UseStateArray = () => {
  // (1) const [people, setPeople] = React.useState([]) // default value is empty array
  const [people, setPeople] = React.useState(data)

  return (
    <React.Fragment>
      {/* (2) using map() to render array */}
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default UseStateArray
