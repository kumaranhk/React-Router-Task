import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import All from './pages/All';
import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import Cybersecurity from './pages/CyberSecurity';
import AI from './pages/Ai';
import Navbar from './components/Navbar';
import Course from './components/course';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/fullstackdevelopment' element={<FullStackDevelopment />} />
          <Route path='/datascience' element={<DataScience />} />
          <Route path='/cybersecurity' element={<Cybersecurity />} />
          <Route path='/ai' element={<AI />} />
            <Route path='/ai/:id' element={<h1>Welcome !</h1>} />
          <Route path='*' element={<h1>Page Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
