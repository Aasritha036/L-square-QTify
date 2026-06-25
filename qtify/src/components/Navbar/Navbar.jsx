import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div><Link to="/">
        <Logo />
      </Link></div>
      <div
        style={{
          lex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "500px",
          margin:"0 20px",
        }}
>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      /></div>
      <div><Button text="Give Feedback" /></div>
    </nav>
  );
}

export default Navbar;
