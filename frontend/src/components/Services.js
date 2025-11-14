import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Complaint Tracking',
      description: 'Efficiently track and monitor all customer complaints from submission to resolution.',
      icon: 'bi bi-search',
      color: 'text-primary'
    },
    {
      title: 'Real-time Updates',
      description: 'Receive instant notifications and updates on complaint status and progress.',
      icon: 'bi bi-bell',
      color: 'text-warning'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Generate comprehensive reports and analytics to identify trends and improve service.',
      icon: 'bi bi-bar-chart',
      color: 'text-success'
    },
    {
      title: 'Multi-user Support',
      description: 'Support for customers, staff, and administrators with role-based access control.',
      icon: 'bi bi-people',
      color: 'text-info'
    },
    {
      title: 'Secure Data Management',
      description: 'Ensure all complaint data is securely stored and protected with advanced encryption.',
      icon: 'bi bi-shield-lock',
      color: 'text-danger'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support to assist with any issues or questions.',
      icon: 'bi bi-headset',
      color: 'text-secondary'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Our Services</h1>
          <p className="lead mb-0">
            Comprehensive solutions designed to streamline your complaint management process
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-5">
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-lg border-0 card-hover">
                <div className="card-body text-center p-4">
                  <div className="mb-4">
                    <i className={`${service.icon} fs-1 ${service.color} hero-icon`}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                  <div className="mt-3">
                    <span className="badge bg-primary-subtle text-primary">Available</span>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <div className="progress" style={{height: '4px'}}>
                    <div className="progress-bar bg-primary" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light border-0 shadow-sm">
              <div className="card-body text-center py-5">
                <h3 className="mb-3">Ready to Get Started?</h3>
                <p className="lead text-muted mb-4">
                  Join thousands of organizations already using QuickResolve to improve their customer service.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <button className="btn btn-primary btn-lg">
                    <i className="bi bi-person-plus me-2"></i>Sign Up Free
                  </button>
                  <button className="btn btn-outline-primary btn-lg">
                    <i className="bi bi-play-circle me-2"></i>Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;