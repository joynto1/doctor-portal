 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
