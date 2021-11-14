import './App.css';
import Main from './components/main/Main';
import { useState, useEffect } from 'react';


// Data management
import {generalData} from './data/global';
import {getData} from './services/serviceConnect'; 

const App = () => {
  const [timeData, setTimeData] = useState([]);

  useEffect(async () => {
    const data = await getData();
    setTimeData(data);    
  }, [])


  return (
    <div className="a-global">
      <Main data={timeData}/>
    </div>
  )
}

export default App
