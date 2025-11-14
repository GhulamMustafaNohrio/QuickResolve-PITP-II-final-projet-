import React from 'react';

const Support = () => {
  const faqs = [
    {
      question: 'How do I submit a complaint?',
      answer: 'Log in to your account and navigate to the "Add Complaint" section. Fill out the form with details about your issue and submit it.'
    },
    {
      question: 'How can I track my complaint status?',
      answer: 'Once logged in, visit your Dashboard where you can view all your complaints and their current status.'
    },
    {
      question: 'What types of complaints can I submit?',
      answer: 'You can submit complaints related to products, services, customer support, billing, or any other issues you encounter.'
    },
    {
      question: 'How long does it take to resolve a complaint?',
      answer: 'Resolution times vary depending on the complexity of the issue. We strive to resolve all complaints within 48 hours.'
    },
    {
      question: 'Can I edit my complaint after submission?',
      answer: 'Yes, you can edit your complaint from the Dashboard by clicking the "Edit" button next to your complaint.'
    },
    {
      question: 'Who can I contact for technical support?',
      answer: 'For technical issues with the platform, contact our support team at support@complaintsystem.com or call +1 (555) 123-4567.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-5">
        <div className="container text-center">
          <i className="bi bi-question-circle fs-1 mb-3 hero-icon"></i>
          <h1 className="display-4 fw-bold mb-3">Support Center</h1>
          <p className="lead mb-0">
            Find answers to your questions and get the help you need
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-lg border-0 mb-5">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <i className="bi bi-life-preserver fs-1 text-primary mb-3"></i>
                  <h2 className="fw-bold">Need Help?</h2>
                </div>
                <p className="lead text-muted text-center mb-4">
                  Welcome to our Support Center. Here you'll find answers to common questions and resources to help you use our complaint management system effectively.
                </p>
                <p className="text-muted text-center">
                  If you can't find what you're looking for, don't hesitate to contact our support team.
                </p>
              </div>
            </div>

          <h3 className="mb-3">Frequently Asked Questions</h3>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card shadow-sm mt-4">
            <div className="card-body text-center">
              <h5 className="card-title">Still Need Help?</h5>
              <p className="card-text">Contact our support team for personalized assistance.</p>
              <div className="row">
                <div className="col-md-6">
                  <i className="bi bi-envelope fs-2 text-primary mb-2"></i>
                  <p><strong>Email:</strong> support@complaintsystem.com</p>
                </div>
                <div className="col-md-6">
                  <i className="bi bi-telephone fs-2 text-primary mb-2"></i>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
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

export default Support;