import './App.scss';
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { smile } from './icons';





function App() {

  const [joke, setJoke] = useState(null);

  const generateJoke = () => {
    axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(res => setJoke(res.data.jokes))
  }

  useEffect(() => {
    generateJoke()
  }, []);




  if (null === joke) {
    return <h1>Loading...</h1>
  }


  return (
    <>

      <div className='header'>
        <div className='container'>
          <span style={{color: 'skyblue', fontSize: '30px', fontWeight: 'bold'}}>SETUP</span>

          {
            joke.map(j => <div
              key={j.id}>
              <h6>{j.setup}</h6>
              <h5>{j.delivery}</h5>
     
            </div>)
          }

         <div className='container' style={{width:'100%'}}>
         <span style={{color: 'skyblue', fontSize: '30px', fontWeight: 'bold'}}>JOKES</span>
          
         {
            joke.map(j => <div
              key={j.id}>
              <h5 >{j.joke}</h5>
            </div>)
          }
         </div>
<br />

          <button style={{padding: '15px', width: '170px', fontSize: '18px'}} type="button" className="btn btn-primary" onClick={generateJoke}>Get Jokes {smile}</button>
        </div>
      </div>

</>

  );
}

export default App;
