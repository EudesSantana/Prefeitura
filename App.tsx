
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'

//pages
import Home from './src/pages/home';
import Profile from './src/pages/profile';
import Student from './src/pages/student';
import Consult from './src/pages/Consult';
import Login from './src/pages/login';
import Myclasses from './src/pages/myclasses';
import Register from './src/pages/register';
import Resetpass from './src/pages/resetpass';
import Sendemail from './src/pages/sendemail';
import Subscribe from './src/pages/subscribe';

export default function App() {
  
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/Consult' element={<Consult/>}/>
          <Route path='/myclasses' element={<Myclasses/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/resetpass' element={<Resetpass/>}/>
          <Route path='/sendemail' element={<Sendemail/>}/>
          <Route path='/subscribe' element={<Subscribe/>}/>
      </Routes>
    </Router>
  );
}