import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    
    // Connecting the Login form to the login API
    const onSubmit = async (event) => {
      event.preventDefault()

      try{
        const response = await axios.post("http://localhost:5000/api/login", {
          email,
          password
        })
        console.log(response)
        navigate('/')
      } catch(error) {
        console.error(error)
      }
    }
  
    return (
        <div className="auth-container">
        <form onSubmit={onSubmit}>
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