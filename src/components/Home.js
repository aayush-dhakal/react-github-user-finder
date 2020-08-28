import React from 'react'
import Search from './Users/Search'
import Users from './Users/Users'
import AlertComponent from './AlertComponent'

const Home = () => {
  return (
    <div className='container'>
      <AlertComponent />
      <Search />
      <Users />
    </div>
  )
}

export default Home
