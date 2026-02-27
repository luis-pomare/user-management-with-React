import { useState } from 'react';

function BasicState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increate
      </button>
    </div>
  );
}

export default BasicState;
