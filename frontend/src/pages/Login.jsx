import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {login} = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const token = response.data;
      login(token);
      setMessage("Login successful!");
      console.log("JWT Token:", token);
      navigate("/dashboard");

    } catch (error) {
      console.error("STATUS:",error.response?.status);
      console.error("DATA:",error.response?.data);
      console.error("ERROR:",error.message);

      if (error.response?.status === 401) {
        setMessage("Invalid email or password");
      } else {
        setMessage("Login failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;