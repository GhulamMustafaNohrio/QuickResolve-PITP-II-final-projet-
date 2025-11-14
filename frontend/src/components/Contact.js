import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-5">
        <div className="container text-center">
          <i className="bi bi-envelope-paper fs-1 mb-3 hero-icon"></i>
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead mb-0">
            Get in touch with our team - we're here to help
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card shadow-lg border-0 h-100 card-hover">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <i className="bi bi-chat-dots fs-1 text-primary mb-3"></i>
                      <h5 className="card-title fw-bold">Get in Touch</h5>
                    </div>
                    <p className="card-text text-muted mb-4">
                      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                    <div className="contact-info">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-envelope-fill text-primary me-3 fs-5"></i>
                        <div>
                          <strong>Email:</strong><br />
                          <span className="text-muted">support@complaintsystem.com</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-telephone-fill text-success me-3 fs-5"></i>
                        <div>
                          <strong>Phone:</strong><br />
                          <span className="text-muted">+1 (555) 123-4567</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-geo-alt-fill text-warning me-3 fs-5"></i>
                        <div>
                          <strong>Address:</strong><br />
                          <span className="text-muted">123 Complaint St<br />Resolution City, RC 12345</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-clock-fill text-info me-3 fs-5"></i>
                        <div>
                          <strong>Business Hours:</strong><br />
                          <small className="text-muted">
                            Mon-Fri: 9:00 AM - 6:00 PM<br />
                            Sat: 10:00 AM - 4:00 PM<br />
                            Sun: Closed
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card shadow-lg border-0 h-100 card-hover">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <i className="bi bi-pencil-square fs-1 text-primary mb-3"></i>
                      <h5 className="card-title fw-bold">Send us a Message</h5>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">
                          <i className="bi bi-person me-1"></i>Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">
                          <i className="bi bi-envelope me-1"></i>Email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label fw-semibold">
                          <i className="bi bi-tag me-1"></i>Subject
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-semibold">
                          <i className="bi bi-chat-text me-1"></i>Message
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you..."
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">
                        <i className="bi bi-send-fill me-2"></i>Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;