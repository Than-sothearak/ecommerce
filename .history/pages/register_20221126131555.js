import React from 'react';
import { useStateContext } from '../context/StateContext';
;
const register = () => {

  const { submitHandler } = useStateContext();
  return (
    <form action='/api/register'method='post'className='form-container' >
      <div className='login'>Register
      </div>
      <div className='input-container'>
        <input name='email'type='email' placeholder='Email' className='input'></input>
        <input name='password'type='password' placeholder='Password' className='input'></input>
      </div>
        <input type='submit' value='Sign Up'/>
      
    </form>
  )
}

export default register