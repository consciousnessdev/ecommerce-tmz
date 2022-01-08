import { Component } from 'react';

import "./sign-in.styles.scss";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { email, password } = this.state;
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <input type="text" name="email" value={email} required onChange={this.handleChange} />
              <label htmlFor="email">Email</label>
              <input
                type="password"
                name="password"
                value={password}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>

              <input type="submit" value="Submit Form" />
            </form>
          </div>
        );
    }
}

export default SignIn;
