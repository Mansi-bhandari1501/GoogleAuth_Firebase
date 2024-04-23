import React from 'react'
import Button from '@mui/material/Button';
const Home = () => {
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}

export default Home
