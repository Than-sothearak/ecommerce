import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';


const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/login', {
        email,
        password,
      });
      if(data === email) {
        alert(email);
      }
      else {
        alert('not')
      }
     
      // dispatch({ type: 'USER_LOGIN', payload: data });
      // Cookies.set('userInfo', data);
      // router.push(redirect || '/');
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <form  onSubmit={submitHandler} action='/api/login' method='POST' className='form-container' >
      <div className='login'>Login
      </div>
      <div className='input-container'>
        <input onChange={e => setEmail(e.target.value)} name='email'type='email' placeholder='Email' className='input'></input>
        <input onChange={e => setPassword(e.target.value)} name='password'type='password' placeholder='Password' className='input'></input>
      </div>
        <input onChange={submitHandler} type='submit' value='Login'/>
        <Link href='/register'>Register</Link>
    </form>
  )
}

export default login