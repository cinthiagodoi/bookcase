import React from 'react';
import logo from '../../assets/logo.jpg';
import {Link} from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className='login'>
      <header>
        <img src={logo} alt='BookCase'/>
      </header>
    
      <main>
        <h1>Your online BookCase!</h1>
        <p>Keep all your reading organized!</p>
        
        <input type='text' placeholder='e-mail'/>
        <input type='text' placeholder='Password'/>
          
        <div className='actions'>
          <button type='submit'>SIGN IN</button>
          <Link to='/create-account' >
            <button type='submit'>CREATE AN ACCOUNT</button>
          </Link>
        </div>
      </main>  

      <footer><a href="https://www.freepik.com/free-photos-vectors/school">School vector created by pch.vector - www.freepik.com</a></footer>
    </div>
 
  )
}


export default Home;