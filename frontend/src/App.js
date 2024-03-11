import Headeer from './components/header.jsx'
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('http://localhost:8080/book')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data)
          
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);



  return (
    <div className="App">
      <Headeer />
      
    </div>
  );
}

export default App;
