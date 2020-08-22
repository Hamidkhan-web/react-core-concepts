import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [ 'Razzak', 'jasim', 'Anwar', 'jafor', 'Alomgir', 'Salman']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'}
  ]
  // const nayokName = nayoks.map(nayok => nayok);
  // console.log(nayokName);
  // const productNames = products.map(product => product)
  // console.log(productNames);
 

  return (
    <div className="App">
      <header className="App-header">
        <p> i am a react person</p>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product =><li>{product.name}</li>)
        }
        {
          products.map(product =><Product product={product}></Product>)
        }
        {/* <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]} ></Product>
       <Person name="Hamidul" job="Web developer"></Person>
       <Person name="Mahim" job="Electric"></Person>
       <Person></Person> */}
       <Person></Person>
       
       
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
  <h5>{price}</h5>
      <button>Bye now</button>

    </div>
  )
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
