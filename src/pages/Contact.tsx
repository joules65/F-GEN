import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xaneqrgd");
  const [focusedField, setFocusedField] = useState(null);

  if (state.succeeded) {
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
              onClick={() => window.location.reload()} 
              className="mt-6 px-6 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-all duration-300"
            >
              Send Another Message
            </button>
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
          {state.errors && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                <p className="text-red-700 font-medium">Please fix the errors below</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="block w-full bg-slate-50 border border-slate-300 text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
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
                  className={`block w-full bg-slate-50 border ${state.errors?.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300`}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-red-500 text-sm" />
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
                  className={`block w-full bg-slate-50 border ${state.errors?.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} text-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300`}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-red-500 text-sm" />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                {state.submitting ? (
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