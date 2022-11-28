import Link from 'next/link'
import React from 'react'


const login = () => {
  return (
    <form className='form-container'>
      <div className='login'>Login Page
      </div>
      <div className='input-container'>
        <input name='email'type='email' placeholder='Email' className='input'></input>
        <input name='password'type='password' placeholder='Password' className='input'></input>
      </div>
      <div className="button"><button type='submit'>Login</button></div>
      <Link href='/register'></Link>
    </form>
  )
}

export default login