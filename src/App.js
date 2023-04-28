
import './App.css';

import MainSection from './components/MainSection/MainSection.js';
import CartSection from './components/CardSection/CartSection.js';
import SingleCard from './components/SingleCard/SingleCard';
import { useState } from 'react';

function App() {

  const  [exerciseTime,setExercoseTime] = useState(0);

  const handleExerciseTime=(e)=>{
    const sum = exerciseTime + parseInt(e);
    setExercoseTime(sum);
  }
  console.log("sum"+exerciseTime);


  return (

    <div className="App">


      <div className='mainSection'>
        <MainSection exerciseTimeFunction={handleExerciseTime}></MainSection>
      </div>

      <div className='CartSection'> 
         <CartSection exercisetimeTotal={exerciseTime}></CartSection>
      </div>


    </div>
  );
}

export default App;
