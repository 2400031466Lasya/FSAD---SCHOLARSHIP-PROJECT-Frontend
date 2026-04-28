import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("STUDENT");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      alert("Registered Successfully ✅");
      navigate("/login");

    } catch (err) {
      console.log(err.response?.data);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div className="login-wrapper">

      <div className="logo-section">
        <div className="logo-icon">🎓</div>
        <h1>ScholarTrack</h1>
      </div>

      <div className="login-card">
        <h2>Sign Up</h2>

        {/* ROLE SELECT */}
        <div className="role-select">
          <button
            type="button"
            className={role === "STUDENT" ? "active" : ""}
            onClick={() => setRole("STUDENT")}
          >
            Student
          </button>

          <button
            type="button"
            className={role === "ADMIN" ? "active" : ""}
            onClick={() => setRole("ADMIN")}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleRegister}>
          <label>Name</label>
          <input onChange={(e) => setName(e.target.value)} />

          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;