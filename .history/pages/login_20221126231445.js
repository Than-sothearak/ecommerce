import axios from 'axios';
import Link from 'next/link'
import React, { useState }from 'react'


const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const  data  = await axios.post('/api/login', {email, password});
      alert('Succss login')
    } catch (err){
      alert(err.message);
    }
    
  }
  return (
    <form action='/api/register'method='POST' className='form-container'>
      <div className='login'>Login Page
      </div>
      <div className='input-container'>
        <input name='email'type='email' placeholder='Email' className='input'></input>
        <input name='password'type='password' placeholder='Password' className='input'></input>
      </div>
      <div className="button"><button type='submit'>Login</button></div>
      <Link href='/register'>Register here</Link>
    </form>
  )
}

export default login