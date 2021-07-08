import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserMenu.Module.css";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth.selectors";

const Navigation = ({ isAuthenticated }) => (
  <div>
    {isAuthenticated ? (
      <>
        <NavLink to="/" exact className={styles.navigation}>
          Главная страница
        </NavLink>
        <NavLink to="/contacts" exact className={styles.navigationSec}>
          Страница контактов
        </NavLink>
      </>
    ) : (
      <>
        <NavLink to="/" exact className={styles.navigation}>
          Главная страница
        </NavLink>
      </>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
