import React from 'react'
import './Register.css';
function Register(){
  return (
    <div class="wrapper">
    
    <div class="form">
       <div class="inputfield">
          <label>First Name</label>
          <input type="text" placeholder="First Name" class="input" required/>
       </div>   
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" class="input" required/>
       </div>  
       <div class="inputfield">
          <label>Password</label>
          <input type="password" placeholder="Password" class="input" required />
       </div>  
      <div class="inputfield">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" class="input" required/>
       </div> 
        <div class="inputfield">
          <label>Gender</label>
          <div class="custom_select">
            <select>
              <option value="">Other</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
       </div> 
        <div class="inputfield">
          <label>Email Id</label>
          <input type="email" placeholder="Email" class="input" required/>
       </div> 
      <div class="inputfield">
          <label>Phone Number</label>
          <input type="number" placeholder="+91" class="input" required/>
       </div> 
      <div class="inputfield">
          <label>Address</label>
          <textarea class="textarea" placeholder="Address" required></textarea>
       </div> 
      <br></br>
      <div class="inputfield terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Register" class="btn"/>
      </div>
    </div>
</div>
  )
}
export default Register