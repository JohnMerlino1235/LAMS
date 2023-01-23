import React, { useState } from 'react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = event => {
    setLastName(event.target.value);
  };

  const handleHeightChange = event => {
    setHeight(event.target.value);
  };

  const handleWeightChange = event => {
    setWeight(event.target.value);
  };

  const handleCancel = event => {
    event.preventDefault();
    // void user's data and return to login page
  };

  const handleSignUp = event => {
    event.preventDefault();
    // validate user information
    // if valid, create account for user and store data in database
    // if invalid, alert user of reason
    // redirect to login page
  };

  return (
    <div>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
            required
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            required
          />
        </label>
        <br />
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default SignUpPage;