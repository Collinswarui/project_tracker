import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from '../src/pages/Home'
import {SavedProj} from './pages/SavedProj'
import {Auth} from '../src/pages/Auth'
import {CreateProj} from '../src/pages/CreateProj'
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='createProject' element={<CreateProj />}/>
          <Route path='/savedProject' element={<SavedProj />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
