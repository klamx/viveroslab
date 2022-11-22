import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export default function Signup () {
  const [formValues, handleInputChange] = useForm({ mail: '', password: '' })

  useEffect(() => {
    console.log(formValues)
  }, [formValues])

  return (
    <div className='login_container'>
      <form className='login_form'>
        <div className='mb-3 col-12'>
          <label htmlFor='exampleInputEmail1' className='form-label'>Correo electronico</label>
          <input name='mail' type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' onChange={handleInputChange} />
        </div>
        <div className='mb-3 col-12'>
          <label htmlFor='exampleInputPassword1' className='form-label'>Contraseña</label>
          <input name='password' type='password' className='form-control' id='exampleInputPassword1' onChange={handleInputChange} />
        </div>
        <div className='mb-3 col-12'>
          <small><Link to='/login'>Iniciar Sesión</Link></small>
        </div>
        <div className='d-grid gap-2 col-12'>
          <button type='submit' className='btn btn-primary'>Registrarse</button>
        </div>
      </form>
    </div>
  )
}
