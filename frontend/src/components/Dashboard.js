import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!token) {
      navigate('/login');
      return;
    }
    setUser(userData);
    fetchComplaints();
  }, [navigate]);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/complaints', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setComplaints(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/complaints/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchComplaints();
    } catch (err) {
      alert('Delete failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <button onClick={handleLogout} className="btn btn-danger mb-3">
        <i className="bi bi-box-arrow-right me-1"></i>Logout
      </button>
      {user && user.role === 'admin' && (
        <Link to="/admin" className="btn btn-secondary mb-3">
          <i className="bi bi-gear me-1"></i>Admin Panel
        </Link>
      )}
      <Link to="/complaint-form" className="btn btn-primary mb-3">
        <i className="bi bi-plus-circle me-1"></i>Add Complaint
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c._id}>
              <td>{c.title}</td>
              <td>{c.category}</td>
              <td>{c.status}</td>
              <td>{new Date(c.date).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/complaint-form?id=${c._id}`)}>
                  <i className="bi bi-pencil me-1"></i>Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c._id)}>
                  <i className="bi bi-trash me-1"></i>Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;