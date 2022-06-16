import React, { useEffect, useState } from 'react';
import logo from '../src/img/banner.jpg';
import Section1 from './components/Section';

function App() {

const [data,setData] = useState([])

function teste(){


  console.log(data);
  

  

       
    
  
}



const getProd = ()=>{
  
  fetch("http://ishopdemo.kinghost.net/leticia/teste111.php")
  .then((response)=>response.json())
  .then((responseJson)=> (setData(responseJson)))
 
}

useEffect(()=>{
 
  getProd();
 
},[])


  return (
    <div > 
         <h1>Listar</h1>
         <ul>
          <button onClick={()=> teste()}>TESTE</button>
          {
               
                
          }

         </ul>
       
    </div>
  );
}

export default App;
