import Link from 'next/link'
import React from 'react'

const signIn = () => {
  return (
    <form className='form-container'>
        <div><h1>Login Page</h1></div>
    <div className='input-container'>
      <input class='input' type='email' placeholder='Email'/>
      <input class='input' type='password' placeholder='Password'/>
    </div>
    <button type='submmit' className='submit'>Login</button>
    <Link href=''><p>Do not have an account?</p></Link>
  </form>
  )
}

export default signIn