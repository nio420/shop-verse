import React from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!");
    e.target.reset();
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay Updated with Our <span className="text-primary">Newsletter</span>
        </h2>

        <p className="text-gray-700 mb-8">
          Get exclusive offers, new arrivals, and updates straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full sm:w-96 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/75 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
