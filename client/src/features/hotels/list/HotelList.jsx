import React from "react";
import { useGetHotelsQuery } from "../hotelSlice";
import { Link } from "react-router-dom";

const linkStyle = { textDecoration: "none", color: "inherit" };

const HotelList = () => {
  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetHotelsQuery();

  let content;

  if (isLoading) content = <p>"Loading . . ."</p>;
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
  else if (isError) content = <p>{error}</p>;

  return <div>{content && content}</div>;
};

export default HotelList;
