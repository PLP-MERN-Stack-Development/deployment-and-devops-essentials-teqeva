import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import UserList from "./components/UserList";
import api from "./services/api";

function App() {
  const [apiStatus, setApiStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkApiStatus();
  }, []);

  const checkApiStatus = async () => {
    try {
      const response = await api.get("/status");
      setApiStatus(response.data);
      setLoading(false);
    } catch (error) {
      console.error("API connection error:", error);
      setApiStatus({ success: false, message: "API connection failed" });
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>🚀 MERN Stack Application</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/users">Users</Link>
            <Link to="/add-task">Add Task</Link>
          </nav>
          {loading ? (
            <div className="status loading">Connecting to API...</div>
          ) : apiStatus && apiStatus.success ? (
            <div className="status success">
              ✅ API Connected - {apiStatus.message}
            </div>
          ) : (
            <div className="status error">
              ❌ API Connection Failed - Check backend server
            </div>
          )}
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/add-task" element={<TaskForm />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </main>

        <footer className="App-footer">
          <p>© 2024 MERN Stack Application | Deployed with ❤️</p>
          <p className="env-info">
            Environment: {process.env.REACT_APP_ENV || "development"} | API:{" "}
            {process.env.REACT_APP_API_URL || "http://localhost:5000/api"}
          </p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Welcome to MERN Stack Application</h2>
      <div className="features">
        <div className="feature-card">
          <h3>📝 Task Management</h3>
          <p>Create, update, and manage your tasks efficiently</p>
        </div>
        <div className="feature-card">
          <h3>👥 User Management</h3>
          <p>Manage users and their roles in the application</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Production Ready</h3>
          <p>Deployed with CI/CD and monitoring</p>
        </div>
      </div>
    </div>
  );
}

export default App;
