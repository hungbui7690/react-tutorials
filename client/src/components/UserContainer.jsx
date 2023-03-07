import React from 'react'

const UserContainer = ({ user, logout, login }) => {
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <button className='btn' onClick={login}>
          {' '}
          Login
        </button>
      )}
    </div>
  )
}

export default UserContainer
