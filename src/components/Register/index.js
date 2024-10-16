import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import withRouter
import ClipLoader from "react-spinners/ClipLoader"; // Import the ClipLoader
import "./index.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import icons for showing/hiding password

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
    isLoading: false, // New state to manage the loading status
    showPassword: false, // New state for password visibility
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg, isLoading: false }); // Stop loading on failure
  };

  submitForm = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true, showSubmitError: false }); // Start loading

    const { name, email, password } = this.state;
    const userDetails = { name, email, password };
    const url = "https://nxttrendzbackend.onrender.com/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure content type is set
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        alert("Your registration was successful! Please Login"); // Alert after successful registration
        this.setState({ isLoading: false }); // Stop loading after success

        // Redirect to the login page
        this.props.history.push("/login");
      } else {
        const errorMsg =
          data.errorMsg || data.error_msg || "Registration failed";
        this.onSubmitFailure(errorMsg); // Handle failure
      }
    } catch (error) {
      this.onSubmitFailure("Something went wrong. Please try again later.");
    }
  };

  onChangeUsername = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeUseremail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  renderPasswordField = () => {
    const { password, showPassword } = this.state;
    return (
      <div className="password-input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password
            id="password"
            className="password-input-filed"
            value={password}
            onChange={this.onChangePassword}
          />
          <button
            type="button"
            className="toggle-password-button"
            onClick={this.togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
      </div>
    );
  };

  renderUsernameField = () => {
    const { name } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={name}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  renderUseremailField = () => {
    const { email } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="text"
          id="email"
          className="username-input-filed"
          value={email}
          onChange={this.onChangeUseremail}
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg, isLoading } = this.state;
    return (
      <div className="register-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        {isLoading ? (
          <div className="loader-container">
            <ClipLoader color="#00BFFF" loading={isLoading} size={50} />
          </div>
        ) : (
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-website-logo-desktop-image"
              alt="website logo"
            />
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderUseremailField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Register
            </button>

            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            <span className="login-link-container">
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </form>
        )}
      </div>
    );
  }
}

// Wrap Register component with withRouter to get history prop
export default Register;
