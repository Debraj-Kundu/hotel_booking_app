import React from "react";
import './home.css';
import HeaderSearchBox from "../../components/header-search/HeaderSearchBox";
import HotelList from "../../features/hotels/list/HotelList";
import Featured from "../../components/featured/Featured";
import FeaturedHotel from "../../components/featured-hotel/FeaturedHotel";
import HotelCategory from "../../components/hotel-category/HotelCategory";

const Home = () => {
  return (
    <>
      <HeaderSearchBox />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <HotelCategory/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedHotel/>
        {/* <MailList/> */}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Home;
