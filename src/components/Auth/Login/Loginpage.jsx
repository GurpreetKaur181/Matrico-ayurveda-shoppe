import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import icons
import styles from './Loginpage.module.css'; // Assuming you have a CSS module for styling

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showLoginBox, setShowLoginBox] = useState(true); 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username} Email: ${email} Password: ${password}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeLoginBox = () => {
    setShowLoginBox(false); // Hide the entire login box when the X is clicked
  };

  return (
    <div className={styles.loginContainer}>
      {showLoginBox && (
        <div className={styles.loginBox}>
          {/* Conditional rendering for the message */}
          <div className={styles.messageContainer}>
            <p>Please Login To Continue</p>
            <button className={styles.closeBtn} onClick={closeLoginBox}>×</button>
          </div>
          
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <div className={styles.inputWithIcon}>
                <AiOutlineUser className={styles.inputIcon} />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputWithIcon}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
               
              </div>
            </div>

            <button type="submit" className={styles.loginBtn}>Submits</button>
          </form>

          <div className={styles.signupLink}>
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
