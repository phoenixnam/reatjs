import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      isLoggedIn: false,
      error: ''
    };
  }

  handleRegister = async (e) => {
    e.preventDefault();

    try {
     
      const response = await fetch('User: https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        })
      });

      if (response.ok) {
        this.setState({ isLoggedIn: true, error: '' });     
      } else {
        // Handle registration error
        const errorData = await response.json();
        this.setState({ error: errorData.message });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      this.setState({ error: 'An error occurred during registration' });
    }
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { isLoggedIn, error } = this.state;

    return (
      <React.Fragment>
        {isLoggedIn ? (
          <div>
            <h1>Welcome, you are logged in!</h1>
            {/* Display content after successful registration */}
          </div>
        ) : (
          <div>
            <h1>Register</h1>
            {error && <p>{error}</p>}
            <form onSubmit={this.handleRegister}>
              <label>
                Username:
                <input
                  required
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  required
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </label>
              <br />
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Register;
