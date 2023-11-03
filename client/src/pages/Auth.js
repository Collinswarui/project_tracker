import { useState } from "react"
import { Login } from "./Login"
import { Link } from 'react-router-dom'
export const Auth = () => {
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="auth-container">
    <form>
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
