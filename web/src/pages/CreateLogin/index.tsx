import React, {useState, FormEvent, ChangeEvent} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

import logo from '../../assets/logo.jpg';
import './styles.css'

const CreateLogin = () => {

  const history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })


  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  
    await api.post('users', formData)
      .then((res => {
        alert('User created!')
        history.push('/')
        return res.data
      }))
       .catch((err => {
         if(err.response) {
           let teste = err.response.data
            for(const [key, value] of Object.entries(teste)){
              console.log(teste)
            }
         }
       }))    
  }

  return (
    <div className='createUser'>
      <header>
        <img src={logo} alt='BookCase'/>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>Create Your Account</h1>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name"
              id="name"
              onChange = {handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input 
              
              type="text" 
              name="email"
              id="email"
              
              onChange = {handleInputChange}
              />
              
         
            
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password"
              id="password"
              onChange = {handleInputChange}
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