import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ setlogincheck }) => {

  const ans = () => {
    setlogincheck(false);
  }
  return (

    
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Geekster</label>
        <ul>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/polldetail"><li>Poll Result</li></Link>
          <Link to="/" onClick={ans}><li>Logout</li></Link>
          <Link to='polldetail'><div id='account'>
            {/* <p>{alluserdata.name}</p> */}
          </div></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar