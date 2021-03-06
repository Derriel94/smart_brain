import React, { useState } from 'react';
//import './Signin.css';


const Register = ( {onRouteChange, loadUser} ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onEmailChange = (e) => {setEmail(e.target.value)};
  const onPasswordChange = (e) => {setPassword(e.target.value)};
  const onNameChange = (e) => {setName(e.target.value)};

  const onSubmitRegister = () => {
    fetch('https://smart-brain-detector-app.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        name: name,
        password: password
        
      })
    })
      .then(response => response.json())
      .then(user => {
      if (user.id) {
        loadUser(user);
        onRouteChange('home');
      }
    });
    
  };

  return(
    <article className="o-90 mw6 center bg-white br3 pa3 pa4-ns mv4 w-100 w-50-m w-25-1 ba b--black-10">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register</legend>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input onChange={onNameChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
            </div>
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
            <input onClick={onSubmitRegister}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;