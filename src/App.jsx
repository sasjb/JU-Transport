import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Transport from "./components/pages/Transport";
// import Trips from "./components/pages/Trips";
import {Home, About, Transport, Trips, Employees, Profile} from "./components/pages";
import AdminTransportList from './components/pages/AdminTransportList';
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
     {/* <Navbar/> */}
     <Routes>
      {/* <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/transport' element={<Transport/>} />
      <Route path="/trips" element={<Trips/>} />
      <Route path="/employees" element={<Employees/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/AdminTransportList" element={<AdminTransportList/>} /> */}
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
