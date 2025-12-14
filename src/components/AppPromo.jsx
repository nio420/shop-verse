import AppImg from "../assets/App.png";

const AppPromo = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* RIGHT: IMAGE */}
          <div className="flex justify-center">
            <img
              src={AppImg}
              alt="E-commerce App"
              className="w-72 md:w-96 h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* LEFT: TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop Faster with Our{" "}
              <span className="text-primary">Mobile App</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Get exclusive deals, faster checkout, and real-time order tracking
              with our e-commerce mobile app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-white/5 hover:text-primary hover:border hover:rounded-lg hover:border-primary transition cursor-pointer">
                Download for Android
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition cursor-pointer">
                Download for iOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
