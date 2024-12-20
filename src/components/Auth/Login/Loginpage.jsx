import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../utils/UserContext.jsx";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import styles from "./Loginpage.module.css";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username);
    setUsername("");
    setPassword("");
    navigate("/");
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <div className={styles.inputWithIcon}>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className={styles.input}
              />
              <AiOutlineUser className={styles.icon} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.inputWithIcon}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className={styles.input}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className={styles.icon}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiOutlineEye
                  className={styles.icon}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <p className={styles.signupText}>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
