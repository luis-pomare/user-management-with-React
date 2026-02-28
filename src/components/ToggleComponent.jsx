import { useState } from 'react';

function ToggleComponent() {
  const [toggle, setToggle] = useState(false);

  const handleClick = function () {
    setToggle((currentValue) => !currentValue);
  };

  return (
    <>
      <button onClick={handleClick}>Change state</button>
      <p>The device is {toggle ? 'ON' : 'OFF'}</p>
    </>
  );
}

export default ToggleComponent;
