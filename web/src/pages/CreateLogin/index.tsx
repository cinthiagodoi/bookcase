import React from "react";
import { useForm } from "react-hook-form";
import {FiArrowLeft} from 'react-icons/fi'
import { Link, useHistory } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import api from '../../services/api'
import './styles.css'



const CreateUser = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  
  async function onSubmit(data: any) {
    await api.post('users', data)
      .then((res => {
        alert('User created!')
        history.push('/')
        return res.data
      }));
  }

   return (
    <div className="createUser">
      <header>
        <img src={logo} alt='BookCase'/>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Create Your Account</h1>
        <fieldset>
          <div className='field'>
            <label htmlFor="inputName">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                ref={register({ required: "Enter your name" })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor="inputEmail">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                ref={register({
                  required: "Enter your e-mail",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid e-mail address",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                ref={register({ required: "Enter your password" })}
              />
              {errors.password && <p className="error">{errors.password.message}</p>}
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
  );
};

export default CreateUser;