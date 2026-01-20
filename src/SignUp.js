import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import './SignUp.css';


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("https://login-signup-mvq6.onrender.com/signup", {
        name,
        email,
        password
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

 return (
  <div className="signup-container">
    <div className="signup-card">
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />

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

      <button onClick={handleSignup}>Sign Up</button>

      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  </div>
);

}

export default Signup;
