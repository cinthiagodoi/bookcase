import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import logo from '../../assets/logo.jpg';
import './styles.css'

const CreateLogin = () => {
  return (
    <div className='createUser'>
      <header>
        <img src={logo} alt='BookCase'/>
      </header>

      <form>
        <h1>Create Your Account</h1>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name"
              id="name"
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email"
              id="email"
              />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password"
              id="password"
            />
          </div>
        </fieldset>

        <div className='actions'>
          <Link to='/'>
            < FiArrowLeft /> 
              Return
            </Link>
          <button type="submit">
            Create Account
          </button>
          
        </div>
       
      </form>
    </div>
    
    
  )
}

export default CreateLogin;