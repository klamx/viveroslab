import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useForm } from '../../hooks/useForm'
import { login } from '../../helpers/login'

export default function Login () {
  const [formValues, handleInputChange] = useForm({ mail: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      login(formValues)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='login_container'>
      <form onSubmit={handleSubmit} className='login_form'>
        <div className='mb-3 col-12'>
          <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
          <input name='mail' type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' onChange={handleInputChange} />
        </div>
        <div className='mb-3 col-12'>
          <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
          <input name='password' type='password' className='form-control' id='exampleInputPassword1' onChange={handleInputChange} />
        </div>
        <div className='mb-3 form-check col-12'>
          <input type='checkbox' className='form-check-input' id='exampleCheck1' />
          <label className='form-check-label' htmlFor='exampleCheck1'>Check me out</label>
        </div>
        <div className='mb-3 col-12'>
          <small><Link to='/signup'>Registrarse</Link></small>
        </div>
        <div className='d-grid gap-2 col-12'>
          <button className='btn btn-primary'>Iniciar Sesión</button>
        </div>
      </form>
    </div>
  )
}
