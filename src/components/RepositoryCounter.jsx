import { useState } from 'react';

export function RepositoryCounter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h3>{counter}</h3>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </>
  );
}
