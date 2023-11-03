import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'> Home</Link>
      <Link to='/createProject'>Create Project</Link>
      <Link to='/savedProject'> Saved Projects</Link>
      <Link to='/register'>Login/Register</Link>
    </div>
  )
}

