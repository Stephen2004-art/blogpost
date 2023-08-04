import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/auth/Profile';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Help from './pages/Help';
import Password from './pages/Password';
import Home from './pages/Home';
import TheStory from '../src/components/TheStory';
import About from '../src/pages/About';
import ContactUs from '../src/pages/ContactUs';
import AddStory from './admin/AddStory';
import AdminProfile from './admin/AdminProfile';
import AdminRegister from './admin/AdminRegister';
import AdminLogin from './admin/AdminLogin';
import AdminHome from './admin/AdminHome';
import AdminTheStory from './components/AdminTheStory';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Profile/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/help' element={<Help/>}/>
          <Route exact path='/password' element={<Password/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/thestory/:id' element={<TheStory/>}/>
          <Route exact path='/aboutcompany' element={<About/>}/>
          <Route exact path='/contactus' element={<ContactUs/>}/>
          <Route exact path='/admin/addstory' element={<AddStory/>}/>
          <Route exact path='/admin' element={<AdminProfile/>}/>
          <Route exact path='/admin/register' element={<AdminRegister/>}/>
          <Route exact path='/admin/login' element={<AdminLogin/>}/>
          <Route exact path='/admin/home' element={<AdminHome/>}/>
          <Route exact path='/admin/thestory/:id' element={<AdminTheStory/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App