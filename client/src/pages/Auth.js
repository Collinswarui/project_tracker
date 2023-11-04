import { useState } from "react"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'


export const Auth = () => {
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()


// Connect the register form to the register API
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password
      })
      // alert('Registration Complete')
      navigate("/")
    } catch (error) {
      if(error.response && error.response.status === 400) {
        setError(error.response.data.message)
      } else {
        console.error(error)
      }
    }
  }


  return (
    <div className="auth-container">
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}      

      <div className="form-group">
        <label htmlFor="username">Username </label>
        <input 
          type="text"
          id="username" 
          value={username}
          onChange={(event) => setUsername(event.target.value)} 
          required
          />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email </label>
        <input 
          type="email" 
          id="email" 
          value={email}
          onChange={(event) => setEmail(event.target.value)} 
          // required
          />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password </label>
        <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(event) => setPassword(event.target.value)} 
          // required
          />
      </div>
      <button type="submit">Register</button>

      
      <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
    </form>
  </div>
  ) 
}
