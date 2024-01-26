import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import Home from './pages/home'
// import About from './pages/about'
// import Contact from './pages/contact'
// import PageNotFound from './pagenotfound/pagenotfound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Routes>
    <Route path='*' element={<PageNotFound/>}/>
    <Route path='/' element={<App/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes> */}
    <App />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);

