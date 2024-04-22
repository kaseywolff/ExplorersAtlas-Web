import React, { useState } from 'react';


export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: ''
  });
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    // handle changes for username and email fields
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    }
    // handle changes for fullName fields (firstName and lastName)
    else if (name === 'firstName' || name === 'lastName') {
      setFullName(prevFullName => ({
        ...prevFullName,
        [name]: value
      }));
    }
    // handle changes for password fields (password and confirmPassword)
    else if (name === 'password' || name === 'confirmPassword') {
      setPassword(prevPassword => ({
        ...prevPassword,
        [name]: value
      }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };



  return (
    <div>
      <h1 className='signup'>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="firstName"
            id="firstName"
            name="firstName"
            value={fullName.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            value={fullName.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={password.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )

}