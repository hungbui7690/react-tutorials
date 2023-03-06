/*
  useState: Error Example
  
*/

const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count = count + 1
    console.log(count) // (***) the value is updated, but it does not trigger re-render
  }
  return (
    <div>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increment
      </button>
    </div>
  )
}

export default ErrorExample
