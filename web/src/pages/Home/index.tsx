import React, { Component, Props } from 'react';
import logo from '../../assets/logo.jpg';
import { Link, RouteComponentProps  } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth'

import './styles.css';

class Home extends Component<RouteComponentProps<any>>{
  state = {
    email: '',
    password: '',
    error: ''
  };
  
  handleSignIn = async (e: any) => {
    e.preventDefault()
    const { email, password } = this.state;
    
    if( !email || !password) {
      this.setState({ error: 'Preencha email e senha para continuar'})
    } else {
    try {
      const response = await api.post('login', { email, password});
      login(response.data.accessToken)
      this.props.history.push("/app");
        
    } catch (err) {
      this.setState({
        error:'Houve um problema'
      })
    }
  }
}

render() {
  return (
    <div className='login'>
      <header>
        <img src={logo} alt='BookCase'/>
      </header>

      <form onSubmit={this.handleSignIn}>
        <main>
          <h1>Your online BookCase!</h1>
          <p>Keep all your reading organized!</p>
          {this.state.error && <p>{this.state.error}</p>}
          
          <input type='email' 
            placeholder='e-mail'
            onChange={e =>  this.setState({ email: e.target.value})}
          />

          <input 
            type='password' 
            placeholder='Password'
            onChange={e => this.setState({ password: e.target.value })}
          />
            
          <div className='actions'>
            <button type='submit'>SIGN IN</button>
            <Link to='/create-account' >
              <button type='submit'>CREATE AN ACCOUNT</button>
            </Link>
          </div>
        </main>
      </form >  

      <footer><a href="https://www.freepik.com/free-photos-vectors/school">School vector created by pch.vector - www.freepik.com</a></footer>
    </div>
 
  )
}
}


export default Home;