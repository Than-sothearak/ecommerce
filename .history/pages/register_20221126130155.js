import React from 'react';
import { useStateContext } from '../context/StateContext';
;
const register = () => {

  const { submitHandler } = useStateContext();
  return (
    <form action='/api/register'method='POST'className='form-container' >
      <div className='login'>Register
      </div>
      <div className='input-container'>
        <input name='email'type='email' placeholder='Email' className='input'></input>
        <input name='password'type='password' placeholder='Password' className='input'></input>
      </div>
      <div className="button"><button type='submit' onClick={() => submitHandler()}>Sign Up</button></div>
      
    </form>
  )
}

export default register