import React from 'react' 
import './LoginSignup.css'
import {Link} from 'react-router-dom';

const LoginSignup = () => {
    return(
        <div className='container'>
         <div className='header'>
         <div className="algni">
          <h3>LOGIN</h3>
          
         </div>
         <div className="underline"></div>
         </div>
         <label for="username">Username</label>
        <input id="username" type="text" placeholder="Username" required />
        <br></br>
         <label for="email">Email</label>
        <input email="emailid" placeholder="email" required />
        <br></br>
         <label for="password">Password</label>
        <input type="password" placeholder="password" class="input" required />
        
        <div className="submit-container">
        </div>
        <Link to="./register"><button type="submit">Login</button></Link>
        </div>
    )
}
export default LoginSignup