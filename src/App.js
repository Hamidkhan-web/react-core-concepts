import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <p> i am a react person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
       
       
      </header>
    </div>
  );
}
function Person(){
  const personStyle={
    border:'2px solid red',
    margin:'10px'

  }
  return (
  <div style={{border: '2px solid yellow', margin: '10px'}} >
     <h1>Name: Sakib Al Hasan </h1>
     <h3>Hero of the year</h3>
  </div>
  )
}

export default App;
