import { useState } from "react"
import { Link } from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    return (
        <div className="auth-container">
        <form>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Login</button>

        <p>
          Don't have an account?<Link to="/register">Sign Up</Link>
        </p>   
      </form>
    </div>
   
  
  
    )
}