"use client";

import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    address: string;
  }> ({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    
     setMessage("");
    setError("");

    try {
      const res = await axios.post("http://localhost:7000/api/auth/signup", formData, {
        withCredentials: true,
      });
      setMessage(res.data.message || "Signup successful!");
      setFormData({ username: "", email: "", password: "", address: "" });

      alert("Signup successful")
    } catch (err: any) {
      setError(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black rounded shadow">
      <h2 className="text-2xl text-blue-800 font-bold mb-4 text-center">Signup</h2>
      {message && <p className="text-green-600 text-center mb-4">{message}</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border text-white rounded"/>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border text-white rounded"/>
        <button
          type="submit"
          className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
