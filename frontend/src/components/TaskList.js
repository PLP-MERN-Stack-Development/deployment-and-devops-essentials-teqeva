import React, { useState, useEffect } from "react";
import api from "../services/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const endpoint = filter === "all" ? "/tasks" : `/tasks?status=${filter}`;
      const response = await api.get(endpoint);
      setTasks(response.data.data);
      setError(null);
    } catch (err) {
      setError(
        "Failed to fetch tasks. Please check if the backend is running."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await api.delete(`/tasks/${id}`);
        fetchTasks();
      } catch (err) {
        setError("Failed to delete task");
        console.error(err);
      }
    }
  };

  const updateTaskStatus = async (id, newStatus) => {
    try {
      await api.put(`/tasks/${id}`, { status: newStatus });
      fetchTasks();
    } catch (err) {
      setError("Failed to update task status");
      console.error(err);
    }
  };

  if (loading) return <div className="loading">Loading tasks...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <h2>📋 Task List</h2>

      <div className="filter-buttons" style={{ marginBottom: "1.5rem" }}>
        <button
          className={`btn ${filter === "all" ? "btn-primary" : ""}`}
          onClick={() => setFilter("all")}
          style={{ marginRight: "0.5rem" }}
        >
          All
        </button>
        <button
          className={`btn ${filter === "pending" ? "btn-primary" : ""}`}
          onClick={() => setFilter("pending")}
          style={{ marginRight: "0.5rem" }}
        >
          Pending
        </button>
        <button
          className={`btn ${filter === "in-progress" ? "btn-primary" : ""}`}
          onClick={() => setFilter("in-progress")}
          style={{ marginRight: "0.5rem" }}
        >
          In Progress
        </button>
        <button
          className={`btn ${filter === "completed" ? "btn-primary" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>
          No tasks found. Create one to get started!
        </p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task._id} className="task-item">
              <h3>{task.title}</h3>
              {task.description && <p>{task.description}</p>}
              <div style={{ marginTop: "0.5rem" }}>
                <span className={`badge badge-${task.status}`}>
                  {task.status}
                </span>
                <span className={`badge badge-${task.priority}`}>
                  {task.priority} priority
                </span>
              </div>
              {task.dueDate && (
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#888",
                    marginTop: "0.5rem",
                  }}
                >
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </p>
              )}
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                {task.status !== "completed" && (
                  <>
                    {task.status === "pending" && (
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          updateTaskStatus(task._id, "in-progress")
                        }
                        style={{
                          fontSize: "0.85rem",
                          padding: "0.4rem 0.8rem",
                        }}
                      >
                        Start
                      </button>
                    )}
                    {task.status === "in-progress" && (
                      <button
                        className="btn btn-primary"
                        onClick={() => updateTaskStatus(task._id, "completed")}
                        style={{
                          fontSize: "0.85rem",
                          padding: "0.4rem 0.8rem",
                        }}
                      >
                        Complete
                      </button>
                    )}
                  </>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
