import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/auth/auth.operations";
import styles from "./Views.Module.css";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Учетная запись</h2>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={styles.form}
        >
          <lable className={styles.lable}>
            <span className={styles.title}>Почта</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </lable>
          <lable className={styles.lable}>
            <span className={styles.title}>Пароль</span>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </lable>
          <button type="submit" className={styles.btn}>
            {this.props.location.pathname === "/registration"
              ? "REGISTER"
              : "LOGIN"}
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginView);
