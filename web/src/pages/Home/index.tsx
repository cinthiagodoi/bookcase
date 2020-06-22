import React from 'react';
import logo from '../../assets/logo.jpg';
import {Link} from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div id='home-page'>
      <div className='content'>

        <header>
          <img src={logo} alt='BookCase'/>
        </header>
      
        <main>
          <h1>Your online BookCase!</h1>
          <p>Keep all your reading organized!</p>

          <div className='log-in'> 
            <div className='email_fiel'>
              <input type='text' placeholder='e-mail'/>
            </div>

            <div className='password_field'>
              <input type='text' placeholder='Password'/>
            </div>
           
           <button type='submit'>SIGN IN</button>
           <button type='submit'>CREATE AN ACCOUNT</button>
          
          </div>
        </main>   
      </div>
    </div>
  )
}

export default Home;