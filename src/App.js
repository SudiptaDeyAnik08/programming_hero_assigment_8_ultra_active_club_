
import './App.css';

import MainSection from './components/MainSection/MainSection.js';
import CartSection from './components/CardSection/CartSection.js';
import SingleCard from './components/SingleCard/SingleCard';

function App() {
  return (

    <div className="App">


      <div className='mainSection'>
        <MainSection></MainSection>
      </div>

      <div className='CartSection'> 
         <CartSection></CartSection>
      </div>


    </div>
  );
}

export default App;
