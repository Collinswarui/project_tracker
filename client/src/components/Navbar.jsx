import {Link} from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom' 


export const Navbar = () => {
  // Logout functionality
  const [cookies, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()

  const logout = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")
    navigate('/')
  }
  return (
    <div className='navbar'>
      {/* logged in user can access this navbar */}
      {cookies.access_token && 
      <>
      <Link to='/home'> Home</Link>
      <Link to='/createProject'>Create Project</Link>
      <Link to='/savedProject'> Saved Projects</Link>
      </>}
      
      
      {!cookies.access_token ? ( 
      <Link to='/register'>CREATE ACCOUNT</Link>
      ) : (
        <button onClick={logout}>
          <FaSignOutAlt />Logout
          </button>
      )}
     
    </div>
  )
}

