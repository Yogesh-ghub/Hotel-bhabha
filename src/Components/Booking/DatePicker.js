import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import "./DatePicker.css";
import { useDispatch } from "react-redux";
import { FaRegCalendarAlt } from "react-icons/fa";
import { putDate } from "../../redux/reducer/date/date.action";
const DateRangePickerComp = () => {
  // date state
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  
  // open close
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch();
  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  useEffect(()=>
  { 
    const dateDetails={
      startDate:{
        date:dates[0].startDate.getDate(),
        month:dates[0].startDate.getMonth()+1,
        year:dates[0].startDate.getFullYear(),
      },
      endDate:{
        date:dates[0].endDate.getDate(),
        month:dates[0].endDate.getMonth()+1,
        year:dates[0].endDate.getFullYear(),
      }

    }

    dispatch(putDate(dateDetails));
  },[dates]);
  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap ">
      <div className="d-lg-flex d-md-flex">
        <button className="date-btn" onClick={() => setOpen((open) => !open)}>
          <FaRegCalendarAlt size={34} />
          <span>
            <h6>Check in</h6>
            <input
              value={`${format(dates[0].startDate, "dd/MM/yyyy")} `}
              readOnly
              className="inputBox"
            />
          </span>
        </button>

        <button className="date-btn" onClick={() => setOpen((open) => !open)}>
          <span>
            <FaRegCalendarAlt size={34} />
          </span>
          <span className="d-flex flex-column">
            <h6>Check out</h6>
            <input
              value={` ${format(dates[0].endDate, "dd/MM/yyyy")}`}
              readOnly
              className="inputBox input-box"
            />
          </span>
        </button>
      </div>

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setDates([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            months={1}
            direction="horizontal"
            className="calendarElement"
            retainEndDateOnFirstSelection={true}
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePickerComp;