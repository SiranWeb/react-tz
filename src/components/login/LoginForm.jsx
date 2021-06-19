import React, { useState, useRef } from "react";
import './style.css';
import authAPI from "../../api/authAPI";
import checkObjectIsEmpty from "../../utils/checkObjectIsEmpty";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions";
import { Redirect } from "react-router-dom";

function LoginForm() {
  const [errorMsg, setErrorMsg] = useState('');
  const [loggingStatus, setLoggingStatus] = useState('wait');
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoggingStatus('logging');
    const user = await authAPI.login(loginRef.current.value, passwordRef.current.value);
    if (checkObjectIsEmpty(user)) {
      setErrorMsg('Incorrect login or password!');
      setLoggingStatus('error');
    } else {
      dispatch(setUser(user));
      setLoggingStatus('success');
    }
  }

  if (loggingStatus === 'success') {
    return <Redirect to="/profile" />
  }

  return (
    <div className={`login_form${loggingStatus === 'logging' ? ' login_form-logging' : ''}`}>
      <input type="text" placeholder="login" ref={loginRef}/>
      <input type="password" placeholder="password" ref={passwordRef}/>
      <button onClick={handleLogin}>Login</button>
      <p className="login_error">{loggingStatus === 'error' ? errorMsg : null}</p>
    </div>
  )
}

export default LoginForm;