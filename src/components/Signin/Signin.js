import React, { useState } from 'react';

//import './Signin.css';


const Signin = ( {onRouteChange, loadUser} ) => {

  const [email, setEmail] = useState('ThisisYourGrandaddy.com');
  const [password, setPassword] = useState('Type Your Password Grandson');

  const onEmailChange = (e) => {setEmail(e.target.value); console.log(email)};
  const onPasswordChange = (e) => {setPassword(e.target.value)};

  const onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then(response => response.json())
    .then(userData => {
      if (userData) {
        loadUser(userData);
        onRouteChange('home');
      }
    })
    
  }

  return(
    <article className="o-90 mw6 center bg-white br3 pa3 pa4-ns mv4 w-100 w-50-m w-25-1 ba b--black-10">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="">
            <input onClick={onSubmitSignIn}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
          </div>
          <div className="lh-copy mt3">
            <p onClick={()=>onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;