import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from '../src/pages/Home'
import {SavedProj} from './pages/SavedProj'
import {Auth} from '../src/pages/Auth'
import {CreateProj} from '../src/pages/CreateProj'
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login'
import { Landing } from './pages/Landing'
import { Footer } from './components/Footer'
// import { useCookies }  from 'react-cookie'


function App() {
  // const [cookies] = useCookies(["access_token"])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/createProject' element={<CreateProj />}/>
            <Route path='/savedProject' element={<SavedProj />} />
            <Route path='/register' element={<Auth />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
