
import React, { useState, useEffect } from "react";


const App = () => {
 const [numbers, setNumbers] = useState([]);
 const [sum, setSum] = useState(0);


 useEffect(() => {
   setSum(numbers.reduce((acc, number) => acc + number, 0));
 }, [numbers]);


 const handleNumberInput = (event) => {
   const number = parseInt(event.target.value);
   setNumbers((prevNumbers) => [...prevNumbers, number]);
 };


 return (
   <div>
     <h1>Sum Calculator</h1>
     <input type="number" onChange={handleNumberInput} />
     <p>Sum: {sum}</p>
   </div>
 );
};


export default App;
