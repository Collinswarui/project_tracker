import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ error, setError] = useState("")
    const navigate = useNavigate()
    const [_, setCookies] = useCookies(["access_token"])


    // Connecting the Login form to the login API
    const onSubmit = async (event) => {
      event.preventDefault()

      try{
        const response = await axios.post("http://localhost:5000/api/login", {
          email,
          password
        })
        setCookies("access_token", response.data.token)
        window.localStorage.setItem("userID", response.data.userID)
        navigate('/')
        console.log(response)
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
        <form onSubmit={onSubmit}>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>} 
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