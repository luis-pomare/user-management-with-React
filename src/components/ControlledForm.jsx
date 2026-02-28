import { useState } from 'react';

function ControlledForm() {
  const [age, setAge] = useState('');
  const [name, setName] = useState('');

  return (
    <>
      <form>
        <input
          type='number'
          name='age'
          placeholder='Your age'
          value={age}
          onChange={(event) => setAge(Number(event.target.value))}
        />
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
    </>
  );
}

export default ControlledForm;
