
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'

//pages
import Home from './src/pages/home';
import Profile from './src/pages/profile';



export default function App() {
  
  return (
    <Router >
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

  