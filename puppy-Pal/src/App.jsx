import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'


//-------State---------------
function App() {
const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);
console.log("puppyList: ", puppyList);



//--------Render-----------
const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className = "app">
    { featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )} 
 {
  puppies.map((puppy) => {
    return <p onClick={() => {
      setFeatPupId(puppy.id)
    }} key={puppy.id}>{puppy.name}</p>;
 })
}
</div>
  );
}

//-----script--------
export default App
