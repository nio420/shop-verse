import React from "react";
import { ShoppingCart, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
    title: "Choose Product",
    description: "Browse our elegant collection and select the products you love.",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: "Secure Payment",
    description: "Fast and secure payment options for a smooth checkout experience.",
  },
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Fast Delivery",
    description: "Get your products delivered safely and quickly to your doorstep.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          How It <span className="text-primary">Works</span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
