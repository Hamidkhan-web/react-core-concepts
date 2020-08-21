import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr. Mahfuz",
    job: "singer"
}
var person2 = {
  name: "Eva Rahman",
  job: "Kokil Konthi"
}
var style={
  color:'red',
  backgroundColor:'yellow'
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Dones  <code>src/App.js</code> and save to reload.
        </p>
  <h1 className="" style={style}>My heading: {person.name +" "+ person.job}</h1>
  <h3 style={{backgroundColor:'cyan', color:'yellow'}}>Singer: {person2.name +" "+ person2.job}</h3>
        <p>My fast react paragraph</p>
       
      </header>
    </div>
  );
}

export default App;
