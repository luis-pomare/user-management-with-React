import { useState } from 'react';

function ControlledForm() {
  const [state, setState] = useState({
    name: '',
    age: '',
  });

  return (
    <>
      <form>
        <input
          type='number'
          name='age'
          placeholder='Your age'
          value={state.age}
          onChange={(event) =>
            setState((prevState) => ({
              ...prevState,
              age: Number(event.target.value),
            }))
          }
        />
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          value={state.name}
          onChange={(event) =>
            setState((prevState) => ({
              ...prevState,
              name: event.target.value,
            }))
          }
        />
      </form>
    </>
  );
}

export default ControlledForm;
