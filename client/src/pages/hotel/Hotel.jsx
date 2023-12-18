import React from "react";
import { useGetHotelQuery } from "../../api/apiSlice";
import { useParams } from "react-router-dom";


const Hotel = () => {
  const id = useParams()
  const {data:hotel}  = useGetHotelQuery(id);
  
 
  return (
    (hotel && <div key={hotel._id}>
        <h1>{hotel.name}</h1>
        <p>{hotel.type}</p>
        <p>{hotel.city}</p>
        <p>{hotel.address}</p>
        <p>{hotel.distance}</p>
        <p>{hotel.title}</p>
        <p>{hotel.desc}</p>
        <p>rating : {hotel.rating ?? "N/A"}</p>
      </div>)
  );
};

export default Hotel;
