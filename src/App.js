import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import PopularProducts from "./components/PopularProduct/PopularProducts";
import DealsOfTheDay from "./components/DealsOfTheDay/DealsOfTheDay";
import CouponByCategory from "./components/CouponByCategories/CouponByCategory";
import MemberShip from "./components/MemberShip/MemberShip";
import Newsletter from "./components/Newsletter/Newsletter";
import HowToWork from "./components/HowToWork/HowToWork";
import Footer from "./components/Footer/Footer";
import PopularCategory from "./components/PopularCategory/PopularCategory";

function App() {
  return (
    <div className="App bg-gray-100">
      <Header />
      <Banner />
      <PopularProducts />
      <DealsOfTheDay />
      <CouponByCategory />
      <MemberShip />
      <Newsletter />
      <HowToWork />
      <PopularCategory />
      <Footer />
    </div>
  );
}

export default App;
