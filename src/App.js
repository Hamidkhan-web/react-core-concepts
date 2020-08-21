import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'jafor', 'Alomgir', 'Salman']
 

  return (
    <div className="App">
      <header className="App-header">
        <p> i am a react person</p>
        <Person name={nayoks[0]}  nayika="Moushumi"></Person>
        <Person name="jasim" nayika="Shabana" ></Person>
        <Person name="BappaRaz" nayika="Cheka"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>
       
       
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px'

  }
  console.log(props)
  return (
  <div style={personStyle} >
     <h1>Nayok:{props.name}</h1>
  <h3>Hero of {props.nayika}</h3>
  </div>
  )
}

export default App;
