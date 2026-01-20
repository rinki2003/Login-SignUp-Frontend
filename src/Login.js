import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // later you can create dashboard
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
  <div className="login-container">
    <div className="login-card">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        New user? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  </div>
);

}

export default Login;
