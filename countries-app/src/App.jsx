import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import Main from './components/main/Main';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
    const [data, setData] = useState();
    const [filter, setFilter] = useState('');
    const [region, setRegion] = useState('');

    useEffect(async ()=> {
      const result = await axios.get('https://restcountries.com/v2/all');
      setData(result);
    },[])



  return (
    <div className="a-main">
      <Header/>
      <SearchBar setFilter={setFilter} setRegion={setRegion}/>
      <Main flagList={data} filter={filter} region={region}/>
    </div>
  )
}

export default App
