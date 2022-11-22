import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
// import Signup from './Signup'

export default function Login () {
  return (
    <div className='login_container'>
      <div className='login_form'>
        <h2>¡Bienvenido/a!</h2>
        <div className=''>
          <label className='' htmlFor='username'>Email</label>
          <input type='text' placeholder='Introduce tu email' name='username' />
        </div>
        <div className=''>
          <label className='' htmlFor='username'>Contraseña</label>
          <input type='password' placeholder='password' name='password' />
        </div>
        <div className=''>
          <label className=''>
            <input type='checkbox' name='remember' id='remember' />
            Recuérdame
          </label>
          <small><Link to='/signup'>¿Has olvidado la contraseña?</Link></small>
        </div>
        <button>Iniciar Sesión</button>
        <button>Resgistrar nueva cuenta</button>
      </div>
      <img className='login_img' src='/assets/vivero.jpg' alt='vivero' />
    </div>
  )
}
