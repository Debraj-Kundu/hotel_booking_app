import React, { useState } from "react";
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
import "./searchStyle.css";
import { useGetHotelByParamQuery } from "../../features/hotels/hotelSlice";

const SearchBox = ({ city, setCity, date, setDate, options, price }) => {
  const [openDate, setOpenDate] = useState(false);
  const [touched, setTouched] = useState(false);
  // const { data, isLoading, isSuccess, isError, error } =
  // useGetHotelByParamQuery({ key: "city", value: "delhi" });

  const getDateRange = () => {
    if (date)
      return `${format(date[0].startDate, "MMM/dd/yyyy")} to ${format(
        date[0].endDate,
        "MMM/dd/yyyy"
      )}`;
    else return "CheckIn - CheckOut";
  };

  return (
    <div>
      {/* //TODO: Price Slider */}
      {/* //TODO: Date */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={city} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {getDateRange()}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                {/* <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div> */}
              </div>
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
      {/* //TODO: City */}
      {/* //TODO: Type */}
    </div>
  );
};

export default SearchBox;
