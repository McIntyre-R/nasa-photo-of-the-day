import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Card from  './components/card/card'


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Y2w7U8vSDoICKvc7igus6bN7Qude69Z9fpahRzhN')
    .then(response => {
      // console.log(response.data)
      return setData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  // console.log(data)
  return (
    <div>
      <Card data = {data} className='app'/>
    </div>
  );
}

export default App;
