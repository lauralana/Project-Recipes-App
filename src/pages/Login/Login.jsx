import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import {
  emailVerification,
  passwordVerification,
} from '../../verifyUserData/emailAndPAsswordVerification';
import { updateLocalStore } from '../../LocalStore/LocalStore';

function Login({ history }) {
  const [userData, setuserData] = useState({
    email: '',
    password: '',
  });

  const [disabledButton, setDisabledButton] = useState(true);

  const handleUserData = ({ name, value }) => setuserData({ ...userData, [name]: value });

  const verifyUserData = () => {
    if (emailVerification(userData.email) && passwordVerification(userData.password)) {
      setDisabledButton(false);
      return;
    }
    setDisabledButton(true);
  };

  const sigin = () => {
    history.push('/foods');
    updateLocalStore('user', { email: userData.email });
    updateLocalStore('mealsToken', 1);
    updateLocalStore('cocktailsToken', 1);
  };

  useEffect(() => {
    verifyUserData();
  }, [userData]);

  return (
    <section>
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            id="email"
            placeholder="email"
            onChange={ ({ target }) => handleUserData(target) }
            name="email"
            value={ userData.email }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            id="password"
            placeholder="password"
            onChange={ ({ target }) => handleUserData(target) }
            name="password"
            value={ userData.password }
          />
        </label>
        <button
          onClick={ sigin }
          data-testid="login-submit-btn"
          disabled={ disabledButton }
          type="button"
        >
          Enter
        </button>
      </form>
    </section>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Login;
