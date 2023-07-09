import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './home.css';
import mystore from '../Redux/Store';

const Home = () => {
  const [tiles, setTiles] = useState([]);
  const [isRankSet, setIsRankSet] = useState(false);
  const [recorrdsdata, setrecorrdsdata] = useState([]);
  const[ranktext,setranktext] = useState('');
  
  const [Count, setCount] = useState(0);

  useEffect(() => {
    tiledata();
  }, []);

  const tiledata = async () => {
    const res = await fetch(
      'https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json'
    );
    const datas = await res.json();
    const updatedTiles = datas.map((tile) => ({ ...tile, hidden:'',value:'' }));
    setTiles(updatedTiles);
  };

  const rankdata = (index,value) => {
    const updatedTiles = [...tiles];
    updatedTiles[index].hidden = true;
    updatedTiles[index].value = value;
    const updatedRecord = updatedTiles[index];
    setrecorrdsdata((prevData) => [...prevData, updatedRecord]);
    console.log(value);
    if(Count == 2){
        setIsRankSet(true);
    }
    else{
        setCount(Count+1);
    }
    const actionObject = {
      type: 'alldishdata',
    //   payload: updatedTiles[index],
    payload:[...recorrdsdata, updatedRecord]
    };
    mystore.dispatch(actionObject);
  };

  return (
    <div className="homebox">
      <Navbar />
      <h2 style={{ color: 'white', textAlign: 'center', padding: '10px',width:"100%",margin:"20px" }}>
        Choose your 3 favourite dish  
      </h2>
      <div className="dish-card">
        {tiles==''? <h2 className='text-white'>Api data is not found please check your internet</h2>:tiles.map((e, index) => {
          return (
            <div class="card" style=
            {{ width: '400px',display: "flex",
            flexDirection: "column",
            alignItems: "center",     
    margin: "50px 0px",
    height: "100%"

            }} key={index}>
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
                  alignItems: "center",
                  padding:'10px'
                }}
              >
                <h4 class="card-title " style={{ color: 'white' }}>
                  {e.dishName}
                </h4>
                <p style={{color:"white"}}>
                  {e.description}
                </p>
                <div className="col-lg-12">
                  <div className="row">

                    {
                      !e.hidden ? 
                      <>
                      <div className="col-lg-4">
                        <button
                          className="btn btn-primary"
                          style={{ width: '100%',
                          display:"flex",
                          justifyContent:"space-between",
                          alignContent:"center",
                        }}
                          value="30"
                          onClick={() => rankdata(index,30)}
                          disabled={isRankSet}
                        >
                          Rank 1
                          <img src='https://cdn-icons-png.flaticon.com/512/889/889140.png' height="20" width="20"></img>
                        </button>
                      </div>
                      <div className="col-lg-4">
                        <button
                          className="btn btn-primary"
                          style={{ width: '100%',
                          display:"flex",
                          justifyContent:"space-between",
                          alignContent:"center",
                        }}
                          value="20"
                          onClick={() => rankdata(index,20)}
                          disabled={isRankSet}
                        >
                          <span>
                          Rank 2
                          </span>
                          
                          <img src='https://cdn-icons-png.flaticon.com/512/889/889140.png' height="20" width="20"></img>
                        </button>
                      </div>
                      <div className="col-lg-4">
                        <button
                          className="btn btn-primary"
                          style={{ width: '100%',
                          display:"flex",
                          justifyContent:"space-between",
                          alignContent:"center",
                        }}
                          value="10"
                          onClick={() => rankdata(index,10)}
                          disabled={isRankSet}
                        >
                          <span>
                          Rank 3
                          </span>
                          
                          <img src='https://cdn-icons-png.flaticon.com/512/889/889140.png' height="20" width="20"></img>
                        </button>
                      </div>
                    </>
                      :
                      <div style={{textAlign:"center"}}>
                      <img src='https://cdn-icons-png.flaticon.com/512/456/456115.png' height="50" width="50" ></img>
                      <h2 style={{color:"green",fontStyle:"normal"}}>Rank is Set</h2> 
                      </div>
                     
                    }
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
