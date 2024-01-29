import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './Components/search-box/SearchBox.component';
import Cardlist from './Components/card-list/Card-list.component';
const App = () => {
  const [monster, setMonsters] = useState({monsters : [] , searchfor : ''})
  console.log('render')
  useEffect(()=> {
    console.log('component did mount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => { setMonsters({...monster , monsters : [...users]})})
  
  },[])
  useEffect(()=>{
     onsearch = (event) =>setMonsters({...monster , searchfor : event.target.value.toLowerCase()})
     console.log('im runnning')
  },[monster.searchfor , monster.monsters])
  return (
    <div className="App">
      <SearchBox className='search-box' searchfor ={onsearch} placeholder='search Monster' />
      <Cardlist monsters={monster.monsters} searchfor={monster.searchfor}/>
    </div>
  );
}
export default App;
