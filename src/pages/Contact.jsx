import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show a toast
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full py-28 bg-linear-to-r from-purple-100 via-pink-100 to-yellow-100">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-gray-700 mb-10">
          We'd love to hear from you. Fill out the form below and we'll get back
          to you as soon as possible.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 md:p-10 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-40 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/85 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
