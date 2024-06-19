import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom'

function App() {
  
  const[movies, setMovies] = useState();

  const getMovies = async () => {
    
    try
    {
      const response = await axios.get("http://localhost:8080/api/v1/movies");

      console.log(response.data);


    setMovies(response.data);

    } 
    catch(err){
      console.log(err);
    }
    

  }

  useEffect(() => {
    getMovies();
  },[])
  
  return (
    <div className="App">
     
<Routes>
  <Route path="/" element={Layout}>
      

  </Route>
</Routes>
    </div>
  );
}

export default App;
