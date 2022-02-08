import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.recognitions}>
        <h2>Thanks to</h2>
        <ul>
          <li>
            <a href="https://rapidapi.com/api-sports/api/covid-193/">
              API Sports
            </a>{" "}
            for proving free COVID-19 API
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/">Flaticon</a> for free
            icons
          </li>
          <li></li>
        </ul>
      </div>
      <div className={styles.rights}>&copy; All rights reserved 2022</div>
    </footer>
  );
};

export default Footer;
