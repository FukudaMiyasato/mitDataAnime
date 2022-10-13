import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Fragment, useState, useEffect, useReducer } from 'react';
import React from 'react';




function App() {
  const { useState, useEffect, useReducer } = React;
  
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/ditto');
  let [data,setData] = useState();

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      // Part 1, step 1 code goes here
        //dispatch({type:'FETCH_INIT'});
        try{
          const result =await axios(url)
          
          setData(result.data);
          console.log(data);
          
          if(!didCancel){
          //  dispatch({type:'FETCH_SUCCESS',payload: result.data});
          }
        } catch (error){
          if(!didCancel){
          //  dispatch({type:'FETCH_FAILURE'});
          }
        }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url])

const changePoke = ()=>{
alert("cambiando el poke");
setUrl('https://pokeapi.co/api/v2/pokemon/ditto');
}
  return (
    <div className="App">
      <header>
      
      </header>
      {data}
      <button className='mt-50' onClick={changePoke}>select pokemon</button>
    </div>
  );
}

export default App;
