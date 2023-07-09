import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './userdetails.css';
import mystore from '../Redux/Store';

const Polldetail = () => {

  const [isRankSet, setIsRankSet] = useState(false);
  const [reposData, setReposData] = useState([]);

  const data = useSelector((ele) => {
    return ele;
  });

  useEffect(()=>{
    
    setReposData(data.alldishdata);
  },[reposData])
 
    console.log(data.alldishdata)

    const rankdata = (index) => {
      
    };

  return (
    <>
      <Navbar />
      <div className='maincontentuser'>
      <div className="dish-card">
        {reposData.sort((a, b) => b.value - a.value).map((e, index) => {
          return (
            <div class="card" style={{ width: '400px' }} key={index}>
              <img
                class="card-img-top"
                src={e.image}
                alt="Card image"
                style={{ width: '80%', height: '50%' }}
              />
              <div
                class="card-body"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <h4 class="card-title " style={{ color: 'black' }}>
                  {e.dishName}
                </h4>
                <label>
                  Value : {e.value}
                </label>
                <div className="col-lg-12">
                  <div className="row">
                        <div className="col-lg-4">
                          <button
                            className="btn btn-primary"
                            style={{ width: '100%',backgroundColor: e.value === 30 ? "green" : "",color:"white" }}
                            value={e.value}
                            onClick={() => e.value=30}
                            disabled={isRankSet}
                          >
                            Rank 1
                          </button>
                        </div>
                        <div className="col-lg-4">
                          <button
                            className="btn btn-primary"
                            style={{ width: '100%' ,backgroundColor: e.value === 20 ? "green" : "",color:"white"}}
                            value={e.value}
                            onClick={() => e.value=40}
                            disabled={isRankSet}
                          >
                            Rank 2
                          </button>
                        </div>
                        <div className="col-lg-4">
                          <button
                            className="btn btn-primary"
                            style={{ width: '100%',backgroundColor: e.value === 10 ? "green" : "",color:"white" }}
                            value={e.value}
                            // onClick={() => rankdata(index)}
                            disabled={isRankSet}
                          >
                            Rank 3
                          </button>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
         {/* <h2>{dishpoll.alldishdata}</h2>  */}
      </div>
    </>
  );
};

export default Polldetail;
