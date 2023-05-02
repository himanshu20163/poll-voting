import Login from './Components/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Userdetail from './Components/Userdetail';
import { useState } from 'react';
import Search from './Components/Search';
import Details from './Components/Details';
import "./App.css"

function App() {

    const [logincheck, setlogincheck] = useState(false)
    const [homedata, sethomedata] = useState({})
    console.log(homedata);
    const [detaildata, setdetaildata] = useState(homedata)


    return ( <
            >
            <
            Routes >
            <
            Route path = '/'
            element = {
                logincheck ? < Navigate to = "/home" / > : < Login setlogincheck = { setlogincheck }
                />}/ >
                <
                Route path = '/home'
                element = {
                    logincheck ? < Home setdetaildata = { setdetaildata }
                    sethomedata = { sethomedata }
                    />:<Navigate to="/
                    "/>}/> <
                    Route path = '/userdetail'
                    element = { logincheck ? < Userdetail / > : < Navigate to = "/" / > }
                    /> <
                    Route path = '/search'
                    element = {
                        logincheck ? < Search setdetaildata = { setdetaildata }
                        />:<Navigate to="/
                        "/>}/> <
                        Route path = '/details'
                        element = {
                            logincheck ? < Details detaildata = { detaildata }
                            />:<Navigate to="/
                            "/>}/> <
                            /Routes> <
                            />

                        );
                    }

                    export default App;