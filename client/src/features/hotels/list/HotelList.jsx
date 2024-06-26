import React, { useState } from "react";
import { useGetHotelsQuery } from "../hotelSlice";
import { Link, useLocation } from "react-router-dom";
import SearchBox from "../../../components/custom-search/SearchBox";
import "./ListStyle.css";
import SearchItem from "../../../components/searched-hotel/SearchItem";

const linkStyle = { textDecoration: "none", color: "inherit" };

const HotelList = () => {
  const location = useLocation();

  const [city, setCity] = useState(location?.state?.destination);
  const [date, setDate] = useState(location?.state?.date);
  const [options, setOptions] = useState(location?.state?.options);
  const [openDate, setOpenDate] = useState(false);
  const [price, setPrice] = useState({
    startPrice: 400,
    endPrice: 10000,
  });

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetHotelsQuery();

  let content;

  if (isLoading) content = <p>Loading . . .</p>;
  else if (isSuccess)
    content = data.map((item) => (
      <Link to={`/hotel/${item._id}`} className="listResult" key={item._id} style={linkStyle}>
        {/* <div>
          <h1>{item.name}</h1>
          <p>{item.type}</p>
          <p>{item.city}</p>
          <p>{item.address}</p>
          <p>{item.distance}</p>
          <p>{item.title}</p>
          <p>{item.desc}</p>
          <p>rating : {item.rating ?? "N/A"}</p>
        </div> */}
        <SearchItem hotel={item}/>
      </Link>
    ));
  else if (isError) content = <p>{error.error}</p>;

  return (
    <div className="list">
      <SearchBox
        city={city}
        setCity={setCity}
        date={date}
        setDate={setDate}
        options={options}
        price={price}
      />
      <div>{content}</div>
    </div>
  );
};

export default HotelList;
