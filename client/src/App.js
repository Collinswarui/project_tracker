import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from '../src/pages/Home'
import {SavedProj} from './pages/SavedProj'
import {Auth} from '../src/pages/Auth'
import {CreateProj} from '../src/pages/CreateProj'
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Auth />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='createProject' element={<CreateProj />}/>
          <Route path='/savedProject' element={<SavedProj />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
