import React from 'react'
import Home from './Pages/Home/Home';
import {BrowserRouter ,Routes ,Route, Navigate} from "react-router-dom";
// import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Single from './Pages/single/Single';
import New from './Pages/New/New';
import { userInputs } from './formSource';
import Login from './components/login/Login'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



function App() {

  const {currentUser } = useContext(AuthContext);

  // const currentUser = false;

  const RequireAuth = ({children})=>{
    return currentUser ? (children) : <Navigate to="/login"/>
  }

  console.log(currentUser)

  return (
    <div className="App">

<BrowserRouter>
    <Routes>
      <Route path="/">
           <Route index element={<RequireAuth><Home/></RequireAuth>}/>
           <Route path='/login' element={<Login/>}/>
       <Route path="users">
           <Route index element={<RequireAuth><List/></RequireAuth>}/>
           <Route path=':usersId' element={<RequireAuth><Single/></RequireAuth>}/>
           <Route path='new' element={<New  inputs={userInputs} title="Add New User"/>}/>
        </Route>
        <Route path="products">
           <Route index element={<RequireAuth><List/></RequireAuth>}/>
           <Route path=':productId' element={<RequireAuth><Single/></RequireAuth>}/>
           <Route path='new' element={<New />}/>
        </Route>
       </Route>
       <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
    </div>

  );
}

export default App;
