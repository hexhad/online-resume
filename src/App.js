import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [value, setValue] = useState(1);
  return (
    <div className="App">
{value}
<button onClick={()=>{setValue(value+1)}}> click me </button>

    </div>
  );
}

export default App;
