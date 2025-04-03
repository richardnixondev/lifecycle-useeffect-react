import { useEffect, useState } from "react"

export function MeowFacts() {

  const [catFacts, setCatFacts] = useState([]);


  async function getFacts() {
    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const responseData = await response.json();
      setCatFacts((prevFacts) => [...prevFacts, responseData.data[0]]);
    } catch(err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getFacts();

    const interval = setInterval(() => {
        getFacts();
      }, 1000);

      return () => clearInterval(interval);
  }, []);

  //getFacts();
  // 1. Add a button to display the fact
  // 2. Add a setInterval for every second to display another fact


return (
    <>
      <h1>Meow Facts</h1>
      <ul>
        {catFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <button onClick={getFacts}>Show Random Fact</button>
    </>
  );
}