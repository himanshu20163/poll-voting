import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './details.css';

const Details = ({detaildata}) => {
  
  const [viewrepoData, setviewReposData] = useState([]);
  console.log(detaildata);

  const fetchRepos = async () => {
    const res = await fetch(detaildata.repos_url);
    const data = await res.json();
    setviewReposData(data);
  };
  
  useEffect(() => {
    fetchRepos();
  }, [detaildata]);

  return (
    <>
      <Navbar />
      <div className='maincontentuserdetail'>
        <h1 style={{textAlign:"center",color:"black",padding:"20px"}}>User Details</h1>
        <div className='carduserdetail'>
          <div className='leftuserdetail'>
            <img src={detaildata.avatar_url}></img>
          </div>
          <div className='rightuserdetail'>
            <h2>{detaildata.login}</h2>
            <div className='userpostsdetail'>
              <p>Repo:   {viewrepoData.length}</p>
              <p>Following:  {detaildata.followers_url.length}</p>
              <p>Followers:  {detaildata.following_url.length}</p>
            </div>
            <h3>{detaildata.location}</h3>
            <p >{detaildata.html_url}</p>
            <Link to={detaildata.html_url}>
              <button>View Profile</button>
            </Link>
          </div>
        </div>
        <h4 style={{textAlign:"center",color:"black",padding:"25px"}}>Repositories({viewrepoData.length})</h4>
        <div className='userdowncarddetail'>
          <div className='innercarduserdetail'>
              <ul>
                {viewrepoData.map((repou) => {
                    return <div className='usercardbottomdetail'>
                        <div className='leftcardbottmdetail'>
                            <h3>{repou.name}</h3>
                  
                        </div>
                        <div className='rightcardbottomdetail'>
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

export default Details;