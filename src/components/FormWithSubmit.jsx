import { useState } from 'react';

function FormWithSubmit() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    currentEmployee: '',
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    console.log(formState.email, formState.password, formState.currentEmployee);

    setFormState({
      email: '',
      password: '',
      currentEmployee: '',
    });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='email'
        value={formState.email}
        placeholder='Enter your email'
        onChange={onChangeHandler}
        name='email'
      />

      <input
        type='password'
        value={formState.password}
        placeholder='Enter your password'
        onChange={onChangeHandler}
        name='password'
      />

      <input
        type='radio'
        name='currentEmployee'
        value='yes'
        checked={formState.currentEmployee === 'yes'}
        onChange={onChangeHandler}
      />

      <input
        type='radio'
        name='currentEmployee'
        value='no'
        checked={formState.currentEmployee === 'no'}
        onChange={onChangeHandler}
      />

      <button type='submit' disabled={!formState.email || !formState.password}>
        Submit
      </button>
    </form>
  );
}

export default FormWithSubmit;
