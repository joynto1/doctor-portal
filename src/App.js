 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
 
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import RequirAuth from './components/RequirAuth';
 

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home ></Home>}></Route>
      <Route path='/appointment' element={
          <RequirAuth>
            <Appointment></Appointment>
          </RequirAuth>
      }
      ></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
