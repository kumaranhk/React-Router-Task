import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import All from './pages/All';
import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import Cybersecurity from './pages/CyberSecurity';
import AI from './pages/Ai';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<All />} />
            <Route path='all/:id' element={<Banner />} />
          <Route path='/fullstackdevelopment' element={<FullStackDevelopment />} />
           <Route path='/fullstackdevelopment/:id' element={<Banner />} />
          <Route path='/datascience' element={<DataScience />} />
            <Route path='/datascience/:id' element={<Banner />} />
          <Route path='/cybersecurity' element={<Cybersecurity />} />
            <Route path='/cybersecurity/:id' element={<Banner />} />
          <Route path='/ai' element={<AI />} />
            <Route path='/ai/:id' element={<Banner />} />
          <Route path='*' element={<h1>Page Not found !</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const Banner = () => {
  return (
    <>
      <h1>Welcome !</h1>
      <Link to='/'>
        <button type='button' className='btn btn-primary'>Home Page</button>
      </Link>
    </>
  )
}

export default App
