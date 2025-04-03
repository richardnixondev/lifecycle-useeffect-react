const [count, setCount] = useState(0)
const [isVisible, setIsVisible] = useState(true);

setInterval(() =>{
  setCount(prev => prev + 1);
}, 1000)
return () => {
   clearInterval(setIntervalId);

}
  <>
    <button onClick={ () => {setIsVisible(!isVisible)} }>Toggle</button>
  { isVisible && <h1>{count}</h1> }
  </>
)