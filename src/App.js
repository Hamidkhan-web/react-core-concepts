import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'jafor', 'Alomgir', 'Salman']
 

  return (
    <div className="App">
      <header className="App-header">
        <p> i am a react person</p>
       <Person name="Hamidul" job="Web developer"></Person>
       <Person name="Mahim" job="Electric"></Person>
       <Person></Person>
       <Person></Person>
       
       
      </header>
    </div>
  );
}
function Person(props){
  return (
    <div style={{border: '2px solid gold', width:'400px', margin:'10px'}} >
      <h3>My Name: {props.name}</h3>
  <p>My Profession: {props.job}</p>
    </div>
  )
}


export default App;
