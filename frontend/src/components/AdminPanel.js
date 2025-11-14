import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/dashboard');
      return;
    }
    fetchComplaints();
  }, [navigate]);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/complaints', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setComplaints(res.data);
      setFilteredComplaints(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/complaints/${id}`, { status }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchComplaints();
    } catch (err) {
      alert('Update failed');
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

  useEffect(() => {
    let filtered = complaints;
    if (statusFilter) {
      filtered = filtered.filter(c => c.status === statusFilter);
    }
    if (categoryFilter) {
      filtered = filtered.filter(c => c.category.toLowerCase().includes(categoryFilter.toLowerCase()));
    }
    setFilteredComplaints(filtered);
  }, [statusFilter, categoryFilter, complaints]);

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <button onClick={() => navigate('/dashboard')} className="btn btn-secondary mb-3">
        <i className="bi bi-arrow-left me-1"></i>Back to Dashboard
      </button>
      <div className="mb-3">
        <input type="text" placeholder="Search by category" className="form-control" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} />
      </div>
      <div className="mb-3">
        <select className="form-control" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>User</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map(c => (
            <tr key={c._id}>
              <td>{c.title}</td>
              <td>{c.category}</td>
              <td>
                <select value={c.status} onChange={(e) => handleStatusChange(c._id, e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
              <td>{c.userId.name} ({c.userId.email})</td>
              <td>{new Date(c.date).toLocaleDateString()}</td>
              <td>
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

export default AdminPanel;