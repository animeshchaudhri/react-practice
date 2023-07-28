import './App.css';
import { useState } from 'react';

export default function App() {

  const [count, setcount] = useState(0);
  const [a, seta] = useState('');
  const [b, setb] = useState('');


 const handlechange = function(event){
  seta(event.target.value)
 }

  function add() {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    setcount(num1 + num2);
  }
  function sub() {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    setcount(num1 - num2);
  }
  return (
    <div className='Container'>
      <div className='child'>
        <form>
          <input className='inputbox' type='number' value={a}
          onChange={handlechange}/>
          <input  className='inputbox' type='number' value={b}
            onChange={(b) =>
              setb(b.target.value)
            }


          />


          <p>{count}</p>
        </form>
        <button onClick={add}>add</button>
        <button onClick={sub}>sub</button>
      </div>
    </div>
  )
}

