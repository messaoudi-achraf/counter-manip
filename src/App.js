import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="step">
        <button
          onClick={() => {
            setStep((s) => s - 1);
          }}>
          -
        </button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="count">
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <span>Count : {count}</span>
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
    </div>
  );
}

export default App;
