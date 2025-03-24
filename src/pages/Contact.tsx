import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [formError, setFormError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    setFieldErrors({});
    
    try {
      // Create FormData object
      const formData = new FormData(e.target);
      
      // Add form ID to help identify the submission
      formData.append("_subject", "New contact form submission");
      
      // Direct submission to Formspree
      const response = await fetch("https://formspree.io/f/xaneqrgd", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        setSucceeded(true);
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        
        if (errorData.errors) {
          const errors = {};
          errorData.errors.forEach(error => {
            if (error.field) {
              errors[error.field] = error.message;
            }
          });
          setFieldErrors(errors);
        }
        
        setFormError("There was an error submitting the form. Please check your inputs and try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 transform transition-all duration-500 hover:shadow-xl">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Thank You!</h2>
            <p className="text-slate-600 text-lg">
              Your message has been received. We'll get back to you soon.
            </p>
            <button 
              onClick={() => window.location.href = window.location.pathname} 
              className="mt-6 px-6 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-all duration-300"
            >
              Send Another Message
            </button>
            <Link to="/" className="mt-6 px-6 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-all duration-300 inline-block">
              Return To HomeScreen
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-500 p-6">
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <p className="text-teal-100 mt-2">We'd love to hear from you. Send us a message!</p>
        </div>
        
        <div className="p-8 space-y-6">
          {formError && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                <p className="text-red-700 font-medium">{formError}</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className={`transition-all duration-300 ${focusedField === 'name' ? 'transform -translate-y-1' : ''}`}>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className={`block w-full bg-slate-50 border ${fieldErrors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300`}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              {fieldErrors.name && <p className="mt-1 text-red-500 text-sm">{fieldErrors.name}</p>}
            </div>
            
            <div className={`transition-all duration-300 ${focusedField === 'email' ? 'transform -translate-y-1' : ''}`}>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className={`block w-full bg-slate-50 border ${fieldErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300`}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              {fieldErrors.email && <p className="mt-1 text-red-500 text-sm">{fieldErrors.email}</p>}
            </div>
            
            <div className={`transition-all duration-300 ${focusedField === 'message' ? 'transform -translate-y-1' : ''}`}>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                  className={`block w-full bg-slate-50 border ${fieldErrors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300`}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              {fieldErrors.message && <p className="mt-1 text-red-500 text-sm">{fieldErrors.message}</p>}
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center text-sm text-slate-500">
            <p>We respect your privacy and will never share your information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
