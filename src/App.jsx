import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Settings from './pages/Settings.jsx';
import DemoRecorder from './pages/DemoRecorder.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
export default function App(){
 return (<Router><div className='min-h-screen flex flex-col bg-neutral-50'>
 <Header/><main className='flex-grow'>
 <Routes><Route path='/' element={<Navigate to='/dashboard'/>}/>
 <Route path='/dashboard' element={<Dashboard/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/settings' element={<Settings/>}/>
 <Route path='/demo' element={<DemoRecorder/>}/>
 </Routes></main><Footer/></div></Router>);}