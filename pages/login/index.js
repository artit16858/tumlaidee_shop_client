import React, { useState, useEffect } from 'react';
import { Alert } from 'antd';
export default function Login() {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [check_login, setChecKLogin] = useState(false);
  const { username, password } = inputs;

  useEffect(() => {
    // dispatch(userActions.logout());
  }, []);

  function _handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function _handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      if (username === 'admin' && password === '123456') {
        setSubmitted(false)
        setChecKLogin(false)
        localStorage.setItem("user_login", JSON.stringify({ username: username, password: password }));
        window.location.reload()
      } else {
        setChecKLogin(true)
      }
    }
  }
  return (
    <div className="wrapper fadeInDown">
      <form onSubmit={(e) => _handleSubmit(e)}>
        <div id="formContent">
          <div className="fadeIn first">
            <img src="/assets/image/tumlaidee-icon.png" alt="my image" />
          </div>
          <input
            type="text"
            name="username"
            className={"login-input fadeIn second " + (submitted && !username ? ' is-invalid' : '')}
            onChange={(e) => _handleChange(e)}
            placeholder="username" />
          {submitted && !username &&
            <div className="invalid-feedback">Username is required</div>
          }
          <input
            type="text"
            name="password"
            className={"login-input fadeIn third" + (submitted && !password ? ' is-invalid' : '')}
            onChange={(e) => _handleChange(e)}
            placeholder="password" />
          {submitted && !password &&
            <div className="invalid-feedback">Password is required</div>
          }
          {check_login &&
            <Alert message="Username or password is incorrect" type="error" />
          }
          <input type="submit" className="login-button fadeIn fourth" value="Log In" />
        </div>
      </form>
    </div>
  )

}

