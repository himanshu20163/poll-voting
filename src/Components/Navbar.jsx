import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = ({setlogincheck}) => {
    const {alluserdata} = useSelector((storedata)=>storedata)
  return (
    
    <div>
        <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Geekster</label>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/userdetail"><li>Userdetail</li></Link>
        <Link to="/search"><li>Search</li></Link>
        <Link to="/"><li onClick={setlogincheck(false)}>Logout</li></Link>
        <Link to='userdetail'><div  id='account'>
        <i class="fa-solid fa-user"></i>
        <p>{alluserdata.name}</p>
        </div></Link>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar