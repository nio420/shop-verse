🛒 Shop-Verse – Premium E-Commerce Website

Shop-Verse is a modern, fully responsive e-commerce website built with React, Tailwind CSS, and React Router, designed for selling premium clothing for men, women, and kids. It includes a dynamic shopping cart, product details, testimonials, and smooth UI interactions.

✨ Features
🌟 Core Features

Dynamic Product List: Display products with images, prices, and descriptions.

Product Details Page: Full description, price, quantity selector, and size selection.

Shopping Cart: Add, remove, and manage products with live total price calculation.

Cart Summary: See total items, subtotal, shipping, and total cost.

Responsive Design: Fully optimized for desktop, tablet, and mobile devices.

🎨 UI/UX

Premium white + orange (FF4D6D) theme.

Smooth hover effects on buttons and product cards.

Product image zoom and subtle transitions.

Sticky navbar and interactive footer.

💻 Functionality

Add/Remove Products: Add products to the cart and remove them directly from cart or product page.

Quantity Control: Increment or decrement product quantities in the cart.

Smooth Scroll: Click on logo in navbar or footer to scroll to top.

Testimonials Carousel: Slick slider for customer feedback, fully responsive.

Context API: Global state management for products and cart functionality.

📱 Responsiveness

Desktop: Full 4-column grid layout for product listing.

Tablet: 2–3 column product grid with adaptive padding.

Mobile: Single-column product list, full-width buttons, and optimized touch interactions.

🛠 Tech Stack
Frontend	Backend/State	Tools & Libraries
React.js	React Context	Tailwind CSS
React Router	-	React Icons
JSX	-	Lucide Icons
-	-	react-hot-toast
-	-	react-slick

📂 Project Structure
shop-verse/
│
├─ public/
│   └─ index.html
│
├─ src/
│   ├─ assets/            # Product images
│   ├─ components/        # Reusable UI components (Navbar, Footer, ProductList, CartDetails, Hero, Testimonials)
│   ├─ context/           # ShopContextProvider for global state
│   ├─ pages/             # Pages (Home, Cart, ProductDetails)
│   ├─ utils/             # Products data file
│   ├─ App.jsx            # Root component
│   └─ main.jsx           # Entry point
│
└─ package.json

🚀 Getting Started
Prerequisites

Node.js >= 16.x

npm or yarn

Installation
# Clone the repository
git clone https://github.com/nio420/shop-verse.git

# Navigate to project directory
cd shop-verse

# Install dependencies
npm install
# or
yarn install

# Run the project
npm run dev
# or
yarn dev

📌 Key Components
🏠 Home Page

Hero section with featured image and call-to-action button.

Product showcase with responsive grid layout.

Testimonials slider with customer feedback.

🛍 Product List

Grid of product cards with image, title, price, and Add to Cart button.

Clicking a product card navigates to Product Details page.

📄 Product Details

Full product information with description, price, quantity selector, and size options.

Add/Remove product with toast notifications.

🛒 Cart Page

List of products in cart with quantity controls and total price.

Remove items individually or clear the entire cart.

Cart summary with subtotal, shipping, and total cost.

Checkout button placeholder for future integration.

📜 Footer

Logo with smooth scroll to top.

Quick links navigation.

Contact info.

Social media links (Facebook, Instagram, Twitter).

🎨 Color Palette
Color Name	Hex	Usage
Primary	#FF4D6D	Buttons, highlights
Hover	#FF6B85	Button hover effect
White	#FFFFFF	Background & cards
Gray	#F3F4F6	Borders & text
Dark Gray	#1F2937	Titles and main text
🔧 Features To Add Later

Stripe or PayPal integration for checkout.

User authentication and order history.

Filter and sort functionality in product list.

Product search functionality.

🖼 Demo Screenshots
Home Page

Product Details

Cart Page

📖 Author

Naimul Islam Omit

Email: naimulislamomit2022@gmail.com

GitHub: https://github.com/nio420

Portfolio: https://nio420.github.io/Portfolio/

💡 License

This project is open-source and available under the MIT License.