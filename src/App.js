import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const  App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = ()=> {
    setIsActive(!isActive);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>
        {
          isActive ? 'Show':'Hide'
        }
      </button>
    </div>
  );
}

export default App;
