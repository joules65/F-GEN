import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xaneqrgd");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-700 to-blue-800 p-6">
        <div className="w-full max-w-lg bg-gray-900 text-white shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-center text-emerald-300">Thank You!</h2>
          <p className="text-center text-blue-300">Your message has been received. We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-700 to-blue-800 p-6">
      <div className="w-full max-w-lg bg-gray-900 text-white shadow-xl rounded-2xl">
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-emerald-300">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-300">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white focus:border-emerald-400 focus:ring-emerald-400 rounded-xl p-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-300">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white focus:border-emerald-400 focus:ring-emerald-400 rounded-xl p-3"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-300">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                className="mt-1 block w-full bg-gray-800 border border-gray-700 text-white focus:border-emerald-400 focus:ring-emerald-400 rounded-xl p-3"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm" />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-transform transform hover:scale-105 shadow-md"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
