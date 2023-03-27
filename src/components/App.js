
import { useState } from "react";
import React from "react";
import './../styles/App.css';



const CalC = () => {
  const [numInput, setNumInputs]=useState([]);//state var
  const [sum, setSum]=useState(0);

  const handleChange=(e)=>{
    const inputValue=e.target.value;
    setNumInputs([...numInput, inputValue]);
  }
setTimeout(() => {
  let localSum=0;
  numInput.forEach((num)=>{
    localSum+=Number(num)
  });
  setSum(localSum)
},500);


  return (
    <div>
      <input type="number"
      onChange={handleChange} />
      <p>Sum of all number: {sum}</p>
        {/* Do not remove the main div */}
    </div>
  )
};

export default CalC;
