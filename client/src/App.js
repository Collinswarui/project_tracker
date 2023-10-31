import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from '../src/pages/Home.js'
import {SavedProj} from './pages/SavedProj'
import {Auth} from '../src/pages/Auth'
import {CreateProj} from '../src/pages/CreateProj'


function App() {
  return (
    <div className="App">
      <Router>
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
