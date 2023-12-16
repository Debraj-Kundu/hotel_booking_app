import React from "react";
import { useGetHotelsQuery, useCreateHotelMutation } from "../../api/apiSlice";
import { useCookies } from "react-cookie";

const HotelList = () => {
  const [cookies] = useCookies(["access_token"]);
  console.log(cookies);
  const { data = [] } = useGetHotelsQuery();
  const [createHotel] = useCreateHotelMutation();
  const hotel = { name: "mera-hotel" };
  const addHotel = () => {
    createHotel(hotel);
  };
  return (
    <div>
      {data.map((item) => (
        <div>
          <h1>{item.name}</h1>
        </div>
      ))}
      <button onClick={addHotel}>Add</button>
    </div>
  );
};

export default HotelList;
