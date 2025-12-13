import React from "react";
import { Truck, ShieldCheck, Headphones, Star } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why <span className="text-primary">Choose Us</span>
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center">
            <Truck className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable delivery right to your doorstep.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm">
              Your payment information is always safe with us.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center">
            <Star className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600 text-sm">
              Carefully selected products with premium quality.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center">
            <Headphones className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our support team is always ready to help you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
