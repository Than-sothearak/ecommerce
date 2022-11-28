
import Link from 'next/link'



const login = () => {

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