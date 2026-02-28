import { useState } from 'react';

function BasicControlledComponent() {
  const [controlledState, setControlledState] = useState('');

  function handleChange(event) {
    setControlledState(event.target.value);
  }

  return (
    <>
      <input value={controlledState} onChange={handleChange} />
    </>
  );
}

export default BasicControlledComponent;
