import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await api.post("/auth/register", formData);

            setMessage("Registration successful!");

            setTimeout(() => {
                navigate("/login");
            }, 1000);

        } catch (error) {

            console.error("Registration error:", error);

            setMessage(
                error.response?.data ||
                "Registration failed. Please try again."
            );
        }
    };
    
    return (
    <div className="login-page">

        <div className="login-card">

            <h1>Create Account 📝</h1>

            <p className="login-subtitle">
                Register for your Expense Tracker
            </p>

            <form className="login-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button className="login-btn" type="submit">
                    Register
                </button>

            </form>

            {message && (
                <p className="login-message">
                    {message}
                </p>
            )}

            <p className="register-link">
                Already have an account?{" "}
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
            </p>

        </div>

    </div>
);
}

export default Register;