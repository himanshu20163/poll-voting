import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './userdetails.css';
import mystore from '../Redux/Store';

const Polldetail = () => {

  const [tiles, setTiles] = useState([]);
  const [isRankSet, setIsRankSet] = useState(false);
  const [recorrdsdata, setrecorrdsdata] = useState([]);
  const [Count, setCount] = useState(0);

  const data = useSelector((ele) => {
    return ele;
  });
  const [reposData, setReposData] = useState([]);
    console.log(data.alldishdata)

    const rankdata = (index) => {
      const updatedTiles = [...tiles];
      updatedTiles[index].hidden = true;
      setrecorrdsdata([...recorrdsdata,updatedTiles[index]]);
      console.log(recorrdsdata);
      if(Count == 2){
          setIsRankSet(true);
      }
      else{
          setCount(Count+1);
      }
      const actionObject = {
        type: 'alldishdata',
      //   payload: updatedTiles[index],
      payload:recorrdsdata
      };
      mystore.dispatch(actionObject);
    };

  return (
    <>
      <Navbar />
      <div className='maincontentuser'>
      <div className="dish-card">
        {data.alldishdata.sort((a, b) => b.value - a.value).map((e, index) => {
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
                            style={{ width: '100%' }}
                            value={40}
                            onClick={() => rankdata(index)}
                            disabled={isRankSet}
                          >
                            Rank 1
                          </button>
                        </div>
                        <div className="col-lg-4">
                          <button
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                            value="20"
                            onClick={() => rankdata(index)}
                            disabled={isRankSet}
                          >
                            Rank 2
                          </button>
                        </div>
                        <div className="col-lg-4">
                          <button
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                            value="10"
                            onClick={() => rankdata(index)}
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
