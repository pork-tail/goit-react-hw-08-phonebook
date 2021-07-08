import React from "react";
import { connect } from "react-redux";
import { getUsername } from "../../redux/auth/auth.selectors";
import { logOut } from "../../redux/auth/auth.operations";
import styles from "./UserMenu.Module.css";

const UserMenu = ({ name, onLogout }) => (
  <div>
    <span className={styles.userMenu}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.btn}>
      Logout
    </button>
  </div>
);

const mapState = (state) => ({
  name: getUsername(state),
});

const mapDispatch = {
  onLogout: logOut,
};

export default connect(mapState, mapDispatch)(UserMenu);
