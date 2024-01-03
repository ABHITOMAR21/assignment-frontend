import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Contact from './Contact';
import NavBar from './NavBar';

function App() {
  return (
<>
    <NavBar />
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
