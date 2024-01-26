import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import News from './News App/news';
import Navbar from './navbar/navbar';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import PageNotFound from './pagenotfound/pagenotfound';
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path='*' element={<PageNotFound />} />
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
