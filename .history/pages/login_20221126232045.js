import Link from 'next/link';
import React from 'react';

const login = () => {

  return (
    <form action='/api/login'method='POST'className='form-container' >
      <div className='login'>Login
      </div>
      <div className='input-container'>
        <input name='email'type='email' placeholder='Email' className='input'></input>
        <input name='password'type='password' placeholder='Password' className='input'></input>
      </div>
        <input type='submit' value='Sign Up'/>
        <Link href='/register'>Register</Link>
    </form>
  )
}

export default login