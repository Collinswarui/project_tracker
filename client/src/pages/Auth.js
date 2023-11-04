import { useState } from "react"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'


export const Auth = () => {
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate

  const handleSubmit = async (event) => {
    event.prevenDefault()

    try {
      await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password
      })
      alert('Registration Complete')
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="auth-container">
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Username </label>
        <input 
          type="text"
          id="username" 
          value={username}
          onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email </label>
        <input 
          type="email" 
          id="email" 
          value={email}
          onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password </label>
        <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit">Register</button>

      
      <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>      
    </form>
  </div>
  ) 
}
