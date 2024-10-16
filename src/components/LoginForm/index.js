import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // Import withRouter
import ClipLoader from "react-spinners/ClipLoader"; // Import the ClipLoader
import "./index.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import icons for showing/hiding password

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
    isLoading: false, // New state to manage the loading status
    showPassword: false, // New state for password visibility
  };

  onChangeUseremail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = () => {
    alert("You Login  Successfully!");
    localStorage.setItem("loggedIn", true); // Set loggedIn flag
    // Trigger the login function passed from App.js
    this.props.history.push("/"); // Redirect to home after successful login
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg, isLoading: false }); // Stop loading on failure
  };

  submitForm = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true, showSubmitError: false }); // Start loading

    const { email, password } = this.state;
    const userDetails = { email, password };
    const url = "https://nxttrendzbackend.onrender.com/login/";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok === true) {
        this.onSubmitSuccess();
      } else {
        const errorMsg = data.error_msg || "Login failed";
        this.onSubmitFailure(errorMsg); // Handle failure
      }
    } catch (error) {
      this.onSubmitFailure("Something went Wrong. Please try again later.");
    }
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
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Password"
          />
          <button
            type="button"
            className="toggle-password-button"
            onClick={() =>
              this.setState((prevState) => ({
                showPassword: !prevState.showPassword,
              }))
            }
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
      </div>
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
          type="email"
          id="email"
          className="username-input-field"
          value={email}
          onChange={this.onChangeUseremail}
          placeholder="Email"
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg, isLoading } = this.state;

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
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
              className="login-website-logo-desktop-img"
              alt="website logo"
            />
            <div className="input-container">{this.renderUseremailField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        )}
      </div>
    );
  }
}

export default withRouter(LoginForm); // Wrap with withRouter for access to history
