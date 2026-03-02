import { useState } from 'react';

function ControlledForm() {
  const [state, setState] = useState({
    name: '',
    age: '',
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <form>
        <input
          type='number'
          name='age'
          placeholder='Your age'
          value={state.age}
          onChange={onChangeHandler}
        />
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          value={state.name}
          onChange={onChangeHandler}
        />
      </form>
    </>
  );
}

export default ControlledForm;
