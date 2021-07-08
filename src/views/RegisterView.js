import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../redux/auth/auth.operations";
import styles from "./Views.Module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Регистрация</h2>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={styles.form}
        >
          <lable className={styles.lable}>
            <span className={styles.title}>Имя пользователя</span>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </lable>
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

const mapDispatch = {
  onRegister: register,
};

export default connect(null, mapDispatch)(RegisterView);
