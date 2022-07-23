import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

function SelectRoomModal({ setOpen, roomId, dates }) {
  //   const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(
    `localhost:4000/api/room/${roomId}`
  );

  //   console.log(`dates: ${dates}`);
  // console.log(`data : ${data}`);
  //   console.log(` room :${roomId}`);

  // const getDatesInRange = (startDate, endDate) => {
  //   const start = new Date(startDate);
  //   const end = new Date(endDate);

  //   const date = new Date(start.getTime());

  //   const dates = [];

  //   while (date <= end) {
  //     dates.push(new Date(date).getTime());
  //     date.setDate(date.getDate() + 1);
  //   }

  //   return dates;
  // };

  // const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  //   console.log(`alldates: ${alldates}`);

  //   const isAvailable = (roomNumber) => {
  //     const isFound = roomNumber.unavailableDates.some((date) =>
  //       alldates.includes(new Date(date).getTime())
  //     );

  //     return !isFound;
  //   };

  //   const handleSelect = (e) => {
  //     const checked = e.target.checked;
  //     const value = e.target.value;
  //     setSelectedRooms(
  //       checked
  //         ? [...selectedRooms, value]
  //         : selectedRooms.filter((item) => item !== value)
  //     );
  //   };
  //   const navigate = useNavigate();

  //   const handleClick = async () => {
  //     try {
  //       await Promise.all(
  //         selectedRooms.map((roomId) => {
  //           const res = axios.put(
  //             `localhost:4000/api/room/availability/${roomId}`,
  //             {
  //               dates: alldates,
  //             }
  //           );
  //           return res.data;
  //         })
  //       );
  //       setOpen(false);
  //       navigate("/");
  //     } catch (err) {}
  //   };
  return (
    <div>
      <Modal.Dialog
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Select Your Rooms</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* {data.map((item) => (
            <div className="rItem" key={item._id}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">
                  Max people: <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">{item.price}</div>
              </div>
              <div className="rSelectRooms">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room">
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))} */}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setOpen(false);
            }}
          >
            CLOSE
          </Button>
          <Button variant="secondary">Book /Reserve</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default SelectRoomModal;
