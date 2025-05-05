import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Front from './Frontpage.jsx'
import See from './See.jsx'
import Login from './Login.jsx'
import Home from './Homepage.jsx'
import Addst from './Addstudent.jsx'
import Addct from './Addct.jsx'
import Registration from './Registration.jsx'
import Pass from './Pass.jsx'
import Fail from './Fail.jsx'
import Logout from './Logout.jsx'
import { BrowserRouter,Routes,Route,Link}from'react-router-dom';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
    <Route path='/' element=<Front/> />
    <Route path='/See' element=<See/> />
    <Route path='/Login' element=<Login/> />
    <Route path='/Registration' element=<Registration/> />
    <Route path='/Home' element=<Home/> />
    <Route path='/Addst' element=<Addst/> />
    <Route path='/Addct' element=<Addct/> />
    <Route path='/Pass' element=<Pass/> />
    <Route path='/Fail' element=<Fail/> />
    <Route path='/Logout' element=<Logout/> />
 </Routes>
 
 </BrowserRouter>
 
 
 
)
