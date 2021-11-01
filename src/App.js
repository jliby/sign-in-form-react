import "./App.css";
import React, { Component } from "react";
// sign in form with react

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      errors: []
    };
    this.validatingUserOnBlur = this.validatingUserOnBlur.bind(this);
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
    this.validatePasswordConfirmtionOnBlur = this.validatePasswordConfirmtionOnBlur.bind(
      this
    );
  }

  submitForm(event) {
    event.preventDefault();
    console.log("submitting the form at this moment...");
    console.log(event);
  }

  displayErrors() {
    return (
      <div className="errors">
        {this.state.errors.map((err, i) => (
          <p key={`err-${i}`}>{err}</p>
        ))}
      </div>
    );
  }

  validateNotEmpty(fieldName, value) {
    if (value.length <= 0) {
      return `${fieldName} must be filled out.`;
    }
  }

  validateEmailFormat(fieldName, value) {
    let [lhs, rhs] = value.split("@");
    lhs = lhs || "";
    rhs = rhs || "";

    if (lhs.length <= 0 || rhs.length <= 0) {
      return `${fieldName} not a standard email format.`;
    }
  }
  validatePasswordOnBlur(event) {
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Passwrod", password));
    this.setState({ password, errors });
  }

  validatingUserOnBlur = (event) => {
    event.preventDefault();
    const username = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Username", username));
    this.setState({ username, errors });
  };

  validatePasswordConfirmtionOnBlur(event) {
    const passwordConfirmation = event.target.value;
    const errors = this.state.errors;

    if (passwordConfirmation !== this.state.password) {
      errors.push("Passwords must match.");
    }
    this.setState({ passwordConfirmation, errors });
  }

  validateEmailOnBlur(event) {
    const email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateEmailFormat("Email", email));
    this.setState({ email, errors });
  }
  displayFormDemo() {
    return (
      <div>
        {
          // providing action on blur
        }
        Username: <input type="text" onBlur={this.validatingUserOnBlur} />
        <br />
        Password: <input type="text" onBlur={this.validatePasswordOnBlur} />
        <br />
        Confirmation for password:{" "}
        <input type="text" onBlur={this.validatePasswordConfirmtionOnBlur} />
        <br />
        Email: <input type="text" onBlur={this.validateEmailOnBlur} />
        <br />
        <br />
        {
          //   // event handler for displaying submission response.
        }
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }

  render() {
    return (
      <div classnName="App">
        Create a new account
        {this.displayErrors()}
        <hr />
        {this.displayFormDemo()}
      </div>
    );
  }
}

export default App;
