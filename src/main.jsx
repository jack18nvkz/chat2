import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './index.css';
import Index from './pages/index.jsx';
import Login from './pages/login.jsx';
import Registration from './pages/registration.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='login' element={<Login />}/>
        <Route path='registration' element={<Registration />}/>     
        <Route path='*' element={<Index />}/> 
      </Routes>
    </BrowserRouter>
 );
