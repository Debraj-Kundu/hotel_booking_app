import React from "react";
import { useGetHotelsQuery } from "../../api/apiSlice";
import { Link } from "react-router-dom";

const linkStyle = { textDecoration: "none", color: "inherit" };

const HotelList = () => {
  const { data = [] } = useGetHotelsQuery();

  return (
    <div>
      {data &&
        data.map((item) => (
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
        ))}
    </div>
  );
};

export default HotelList;
