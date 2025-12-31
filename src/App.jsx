import { useState } from "react";
import "./index.css";

const App = () => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Masjid Hub</h1>
        <p>Connecting Our Community</p>
      </div>

      <div className="right-panel">
        <h2>Log In</h2>

        <form className="login-form">
          <div className="input-group">
            <span className="material-symbols-outlined">mail</span>
            <input type="text" placeholder="UserName" required />
          </div>

          <div className="input-group password-group">
            <span className="material-symbols-outlined">lock</span>
            <input
              type={isPassword ? "password" : "text"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="password-toggle material-symbols-outlined"
              onClick={() => setIsPassword(!isPassword)}
              aria-label={isPassword ? "Show password" : "Hide password"}
            >
              {isPassword ? "visibility" : "visibility_off"}
            </button>
          </div>

          <button className="login-btn" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
