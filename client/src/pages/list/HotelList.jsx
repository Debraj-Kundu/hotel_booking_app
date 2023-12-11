import React from "react";
import { useGetHotelsQuery } from "../../api/apiSlice";

const HotelList = () => {
  const { data = [] } = useGetHotelsQuery();

  return (
    <div>
      {data.map((item) => (
        <div>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
