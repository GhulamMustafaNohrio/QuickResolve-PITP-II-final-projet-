import React from 'react';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">About QuickResolve</h1>
              <p className="lead mb-4">
                Empowering organizations with streamlined complaint resolution and efficient management solutions.
              </p>
              <div className="d-flex gap-3">
                <div className="text-center">
                  <i className="bi bi-shield-check fs-1 text-warning mb-2"></i>
                  <div className="small">Secure</div>
                </div>
                <div className="text-center">
                  <i className="bi bi-lightning-charge fs-1 text-info mb-2"></i>
                  <div className="small">Fast</div>
                </div>
                <div className="text-center">
                  <i className="bi bi-graph-up fs-1 text-success mb-2"></i>
                  <div className="small">Efficient</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <i className="bi bi-building fs-1 text-white opacity-75 hero-icon"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 text-primary">Our Story</h2>
                <p className="lead text-muted mb-4">
                  QuickResolve is a cutting-edge complaint management system designed to streamline the process of handling customer complaints and feedback. Our platform empowers organizations to efficiently track, manage, and resolve issues, ensuring customer satisfaction and continuous improvement.
                </p>

                <div className="row mt-5">
                  <div className="col-md-6 mb-4">
                    <div className="text-center">
                      <i className="bi bi-bullseye fs-1 text-primary mb-3"></i>
                      <h5>Our Mission</h5>
                      <p className="text-muted">
                        To revolutionize complaint resolution by providing organizations with tools that enhance communication, improve response times, and foster positive customer relationships.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="text-center">
                      <i className="bi bi-eye fs-1 text-success mb-3"></i>
                      <h5>Our Vision</h5>
                      <p className="text-muted">
                        To be the leading complaint management platform globally, setting the standard for excellence in customer service and issue resolution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-light p-4 rounded mt-4">
                  <h5 className="text-center mb-3">Why Choose QuickResolve?</h5>
                  <div className="row text-center">
                    <div className="col-md-4 mb-3">
                      <i className="bi bi-clock-history fs-2 text-warning mb-2"></i>
                      <div className="fw-bold">24/7 Support</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="bi bi-lock fs-2 text-danger mb-2"></i>
                      <div className="fw-bold">Secure & Private</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="bi bi-rocket fs-2 text-primary mb-2"></i>
                      <div className="fw-bold">Fast Resolution</div>
                    </div>
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

export default AboutUs;