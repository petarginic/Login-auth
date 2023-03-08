import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import User from './components/User';
// username: kminchelle
// password: 0lelplR

const App = () =>  {

  const [user,setUser] = useState(null)
  const [message, setMessage] = useState("")

  const handleOnLogin  = async (username,password)  => {
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        username,
        password,
     })   
      })
      const response = await res.json()
      if(response.message) {
        setMessage(response.message)
      }
      else {
        setUser(response)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleOnLogout = () => {
    setUser(null)
    console.log(user)
  }
  return (
    <div className='app'>
     {user ? <User user={user} handleLogout={handleOnLogout} /> : <Login message={message} handleLogin={handleOnLogin} /> }
    </div>     
    );
}

export default App;

