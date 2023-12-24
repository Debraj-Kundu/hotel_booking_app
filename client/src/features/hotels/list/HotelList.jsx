import React, { useState } from "react";
import { useGetHotelsQuery } from "../hotelSlice";
import { Link, useLocation } from "react-router-dom";

const linkStyle = { textDecoration: "none", color: "inherit" };

const HotelList = () => {
  const location = useLocation();
  const [city, setCity] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    person: 1,
    room: 1,
  });
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
      <Link to={`/hotel/${item._id}`} key={item._id} style={linkStyle}>
        <div>
          <h1>{item.name}</h1>
          <p>{item.type}</p>
          <p>{item.city}</p>
          <p>{item.address}</p>
          <p>{item.distance}</p>
          <p>{item.title}</p>
          <p>{item.desc}</p>
          <p>rating : {item.rating ?? "N/A"}</p>
        </div>
      </Link>
    ));
  else if (isError) content = <p>{error.error}</p>;

  return <div>{content}</div>;
};

export default HotelList;
