import ProductList from "../components/ProductList.jsx";

const ProductsPage = () => {
  return (
    <section className="w-full min-h-screen py-28 bg-linear-to-r from-purple-100 via-pink-100 to-yellow-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Our <span className="text-primary">Products</span>
        </h1>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Explore our complete collection of amazing products. Add your
          favorites to the cart easily!
        </p>
        {/* Product List Component */}
        <ProductList title="Explore All Products" />
      </div>
    </section>
  );
};

export default ProductsPage;
