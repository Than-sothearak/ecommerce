import axios from 'axios';
import Link from 'next/link'
import React, { useState }from 'react'


const login = () => {
  const [email, setEmail] = useState('');
  const [passoword, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/login', {email, passoword});
  }
  return (
    <form onSubmit={submitHandler} className='form-container'>
      <div className='login'>Login Page
      </div>
      <div className='input-container'>
        <input onChange={e => setEmail(e.target.value)} name='email'type='email' placeholder='Email' className='input'></input>
        <input onChange={e => setPassword(e.target.value)} name='password'type='password' placeholder='Password' className='input'></input>
      </div>
      <div className="button"><button type='submit'>Login</button></div>
      <Link href='/register'>Register here</Link>
    </form>
  )
}

export default login