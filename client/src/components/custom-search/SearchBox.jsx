import React, { useState } from 'react'
import { DateRange } from "react-date-range";
import {
  faCalendarDays,
  faHotel,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useGetHotelByParamQuery } from '../../features/hotels/hotelSlice';

const SearchBox = ({city, date, setDate, options, price}) => {
  
  const [openDate, setOpenDate] = useState(false);
  const [touched, setTouched] = useState(false);
  const { data, isLoading, isSuccess, isError, error } =
  useGetHotelByParamQuery({ key: "city", value: "delhi" });

  const getDateRange = () => {
    if(date)  
      return `${format(date[0].startDate, "MMM/dd/yyyy")} to ${format(
      date[0].endDate,
      "MMM/dd/yyyy"
    )}`;
    else
        return "CheckIn - CheckOut"
  };

  return (
    <div>
        {/* //TODO: Price Slider */}
        {/* //TODO: Date */}
        <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {getDateRange()}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => {
                      setDate([item.selection]);
                      setTouched(true);
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
        {/* //TODO: City */}
        <h2>{city}</h2>
        {/* //TODO: Type */}
    </div>
  )
}

export default SearchBox