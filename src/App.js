import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);


  return (
    <div>
      <div className="step">
        <input type="range" min="0" max="10" value={step} onChange={(e)=>setStep(Number(e.target.value))} />
        <span>Step : {step}</span>
        <br/>
        {/* <button
          onClick={() => {
            setStep((s) => s - 1);
          }}>
          -
        </button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>

      <div className="count">
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input type="placeholder" value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
        <button onClick={() => setCount((s) => s + step)}>+</button>

        {count === 0 ? (
          <p>Today is : {date.toDateString()}</p>
        ) : count > 0 ? (
          <p>
            {count} days from now is {date.toDateString()}
          </p>
        ) : (
          <p>
            {-count} days ago was {date.toDateString()}
          </p>
        )}

        {/* {count >= 0 ? <p>{count} days from now is {date.toDateString()}</p> : <p>{-count} days ago was {date.toDateString()}</p>} */}
      </div>
      {(count !== 0 || step !== 1) ?  <button onClick={()=> (setCount(0) ,
      setStep(1))}>Reset</button> : null }
    </div>
  );
}

export default App;
