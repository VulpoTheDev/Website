import React, { useRef } from "react";
import Layout from "../../../components/Layout/Layout";
import styles from "./Login.module.scss";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <Layout>
      <div className={styles.login}>
        <h1>Login</h1>
        <form>
          <div className={styles.input}>
            <label htmlFor="email">Email</label>
            <input type="email" ref={emailRef} name="email" id="email" />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              ref={passwordRef}
              name="password"
              id="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
}
