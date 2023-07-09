import Login from './Components/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import { useState } from 'react';
import Search from './Components/Search';
import "./App.css"
import Polldetail from './Components/Polldetail';

function App() {

    const [logincheck, setlogincheck] = useState(false)
    const [homedata, sethomedata] = useState({})
    console.log(homedata);
    const [detaildata, setdetaildata] = useState(homedata)

    return (<>
        <Routes>
            <Route path='/' element={logincheck ? < Navigate to="/home" /> : < Login setlogincheck={setlogincheck} />} />
            <Route path='/home' element={logincheck ? < Home setdetaildata={setdetaildata} sethomedata={sethomedata} /> : <Navigate to="/" />} />
            <Route path='/polldetail' element={logincheck ? <Polldetail /> : < Navigate to="/" />} />
        </Routes>
    </>
    );
}

export default App;