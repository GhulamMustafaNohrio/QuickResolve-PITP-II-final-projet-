import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ComplaintForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const navigate = useNavigate();

  const fetchComplaint = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/complaints/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTitle(res.data.title);
      setDescription(res.data.description);
      setCategory(res.data.category);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchComplaint();
    }
  }, [id, fetchComplaint]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { title, description, category };
      if (id) {
        await axios.put(`http://localhost:5000/api/complaints/${id}`, data, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
      } else {
        await axios.post('http://localhost:5000/api/complaints', data, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
      }
      navigate('/dashboard');
    } catch (err) {
      alert('Failed to save complaint');
    }
  };

  return (
    <div className="container mt-5">
      <h2>{id ? 'Edit Complaint' : 'Add Complaint'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Category</label>
          <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">
          <i className={`bi ${id ? 'bi-pencil-square' : 'bi-send'} me-1`}></i>{id ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;