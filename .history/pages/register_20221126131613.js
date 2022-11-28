import React from 'react';
;
const register = () => {

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