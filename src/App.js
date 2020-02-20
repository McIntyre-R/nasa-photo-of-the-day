import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import DayCard from  './components/card/card'
import styled from "styled-components";



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
  const Wrapper = styled.div`
  background-color: black;
  height: 100vh
`
  // console.log(data)
  return (
    <Wrapper>
      <DayCard data = {data} className='app'/>
    </Wrapper>
  );
}

export default App;
