import React, {useState } from 'react';
import axios from 'axios';

const register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');

  const submitHandlers = async (e) => {
    e.preventDefault();
     try {
      const { data } = await axios.post('/api/register', { email, password });
      alert('Succ')
      console.log(data.email);
     } catch (err){
      console.log(err);
     }
      
  };
  return (
    <form method="post"action='/api/register'className='form-container' >
      <div className='login'>Register
      </div>
      <div className='input-container'>
        <input onChange={e => setEmail(e.target.value)} name='email'type='email' placeholder='Email' className='input'></input>
        <input onChange={e => setPassword(e.target.value)} name='password'type='password' placeholder='Password' className='input'></input>
      </div>
      <input type='submit' value='Sign Up'/>
      
    </form>
  )
}

export default register