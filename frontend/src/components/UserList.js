import React, { useState, useEffect } from "react";
import api from "../services/api";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get("/users");
      setUsers(response.data.data);
      setError(null);
    } catch (err) {
      setError(
        "Failed to fetch users. Please check if the backend is running."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <h2>👥 User List</h2>

      {users.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No users found.</p>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div key={user._id} className="user-item">
              <h3>{user.name}</h3>
              <p>📧 {user.email}</p>
              <p>
                <span className="badge badge-low">{user.role}</span>
                <span
                  className={`badge ${
                    user.isActive ? "badge-completed" : "badge-pending"
                  }`}
                >
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#888",
                  marginTop: "0.5rem",
                }}
              >
                Joined: {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
