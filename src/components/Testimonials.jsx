import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David Miller",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Amazing quality and fast delivery. I'm really impressed with the service!",
  },
  {
    name: "Kimberly Johnson",
    role: "Happy Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    text: "The app makes shopping so easy. Great experience every time!",
  },
  {
    name: "Ryan Lee",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    text: "Affordable prices and premium products. Highly recommended!",
  },
  {
    name: "Sondra Smith",
    role: "Happy Shopper",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
    text: "I love this app! The products are high quality and the delivery is super fast.",
  },
];

const Testimonials = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,   
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Our <span className="text-primary">Customers Say</span>
        </h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
                />
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <span className="text-sm text-gray-500 block mb-3">{item.role}</span>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating ? "text-primary fill-primary" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">“{item.text}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
