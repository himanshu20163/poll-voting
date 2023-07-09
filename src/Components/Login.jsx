import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import axios from 'axios';

const Login = ({setlogincheck}) => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [profiledata , setprofiledata] = useState({});

    // check details
    function check_details() {
        if (username != "" && password != "") {
            alert("Login Successful");
            return true;
        }
        else {
            alert("all details");
            return false;
        }
    }
    // profile send data
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        // Make a POST request to add a new user
        const response = await axios.post('https://poll-voting-seven.vercel.app/users', {
          username,
          password
        });
        console.log(response.data); // Log the newly created user object
        setusername(''); // Clear the input fields
        setpassword('');
            if( check_details() == false){
                setlogincheck(false)
            }
            else{
              setlogincheck(true);
            }
      } catch (error) {
        console.error(error);
      }
    };
     // login form design 
  return (
    <section >
  <div class="wrapper fadeInDown">
  <div id="formContent">

    <div class="fadeIn first p-5" style={{padding:"30px"}}>
    <i class="fa fa-solid fa-user" style={{fontSize:"42px"}}></i>
    </div>

    <form onSubmit={handleSubmit}>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" onChange={(e)=>{
         setusername(e.target.value);
      }}/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" onChange={(e)=>{
        setpassword(e.target.value);
      }}/>
      <input type="submit" class="fadeIn fourth" value="Log In" />
    </form>

    {/* <!-- Remind Passowrd --> */}
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
</section>
  )
}

export default Login

