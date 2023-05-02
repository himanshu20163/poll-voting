import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './details.css';
import './userdetails.css';


const Userdetail = () => {
  const { alluserdata } = useSelector((storedata) => storedata);
  const [reposData, setReposData] = useState([]);

  const fetchRepos = async () => {
    const res = await fetch(alluserdata.repos_url);
    const data = await res.json();
    setReposData(data);
  };
  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <>
      <Navbar />
      <div className='maincontentuser'>
        <h1 style={{textAlign:"center"}}>My Github Profile</h1>
        <div className='carduser'>
          <div className='leftuser'>
            <img src={alluserdata.avatar_url}></img>
          </div>
          <div className='rightuser'>
            <h2>{alluserdata.name}</h2>
            <div className='userposts'>
              <p>Repo:   {alluserdata.public_repos}</p>
              <p>Following:  {alluserdata.followers_url.length}</p>
              <p>Followers:  {alluserdata.following_url.length}</p>
            </div>
            <h3>{alluserdata.location}</h3>
            <p style={{color:"white"}}>{alluserdata.html_url}</p>
            <Link to={alluserdata.html_url}>
              <button>View Profile</button>
            </Link>
          </div>
        </div>
        <h1 style={{textAlign:"center"}}>Repositories({alluserdata.public_repos})</h1>
        <div className='userdowncard'>
          <div className='innercarduser'>
              <ul>
                {reposData.map((repou) => {
                    return <div className='usercardbottom'>
                        <div className='leftcardbottm'>
                            <h1>{repou.name}</h1>
                  
                        </div>
                        <div className='rightcardbottom'>
                         <Link><button>View Repo</button></Link>
                         <Link><button>Live Demo</button></Link>
                        </div>
                    </div>
                    })}
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userdetail;
