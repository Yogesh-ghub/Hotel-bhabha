import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Modal, Button, Container, Row } from "react-bootstrap";
import about2 from "../../Assets/images/about-grid-small.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificROOM } from "../../redux/reducer/Hotel/hotel.action";
import { addToCart } from "../../redux/reducer/Cart/cart.action";
import { differenceInDays } from "date-fns";
function RoomBookingCard(room) {
  const [roomNo, setRoomNo] = useState("0");

  const [adult, setAdult] = useState("1");
  const [child, setChild] = useState("0");

  const [price, setPrice] = useState();
  const [totalGuest, setTotalGuest] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const n = room.guestCapacity;
  const dispatch = useDispatch();
  const [roominfo, setroominfo] = useState({});

  const [selectedRoom, setSelectedRoom] = useState([
    {
      id: 1,
      adult: "1",
      child_5to7: "0",
    },
  ]);

  const reduxState = useSelector((globalState) => globalState.cartReducer.cart);
  const dateReduxState = useSelector(
    (globalState) => globalState.datereducer.date
  );
  console.log("room booking", dateReduxState.startDate);

  const count = differenceInDays(
    new Date(
      dateReduxState.endDate.year,
      dateReduxState.endDate.month,
      dateReduxState.endDate.date
    ),
    new Date(
      dateReduxState.startDate.year,
      dateReduxState.startDate.month,
      dateReduxState.startDate.date
    )
  );

  console.log("room booking", count);

  const [roomDetails, setRoomDetails] = useState([
    {
      roomname: "",
      noOfRooms: "",
      noOfAdults: 1,
    },
  ]);

  console.log(roomDetails);
  useEffect(() => {
    room._id &&
      dispatch(getSpecificROOM(room._id))
        .then((data) => {
          setroominfo(data.payload);
          return data.payload;
        })
        .then((data) => {
          console.log(data);
          reduxState.forEach((each) => {
            if (each._id === data._id) {
              setroominfo((prev) => ({ ...prev, isAddedToCart: true }));
            }
          });
        });
  }, [reduxState]);

  const addFoodToCart = () => {
    dispatch(
      addToCart({
        roomid: roominfo._id,
        roomName: roominfo.name,
        quantity: 1,
        price: price,
      })
    );
    setroominfo((prev) => ({ ...prev, isAddedToCart: true }));
  };

  // const addRow = () =>{

  //   const newRow = [
  //     // ...selectedRoom,
  //     {
  //       id: selectedRoom.length + 1,
  //       adult: "1",
  //       child_5to7: '0',
  //       child_below5: '0'
  //     }
  //   ];
  //   setSelectedRoom([...selectedRoom, newRow])
  // }

  const handleRoomnoChange = (e) => {
    setRoomNo(e.target.value);

    setRoomDetails({ ...roomDetails, noOfRooms: e.target.value });
  };

  // useEffect(()=>{
  //   setRoomDetails(current =>{
  //     current.map(value =>{
  //       return {...value, noOfAdults: parseInt(adult) + parseInt(child) + parseInt(belowChild)}
  //     })
  //   })
  // }, [adult])

  const filtered = selectedRoom.find((value) => {
    return value.id === 1;
  });

  console.log(filtered.adult);

  const updateAdult = (id, value) => {
    if (parseInt(value) + parseInt(child) <= room.guestCapacity) {
      setAdult(value);
    } else {
      setShowAlert(true);
    }
  };
  const updateChild_5to7 = (id, value) => {
    if (parseInt(adult) + parseInt(value) <= room.guestCapacity) {
      setChild(value);
    } else {
      setShowAlert(true);
    }
  };

  useEffect(() => {
    // function roomPrice(){

    console.log("inside price");
    const totalGuest = parseInt(adult) + parseInt(child);
    if (totalGuest === 1) {
      const totalPrice = room.pricePerNight * (count + 1);
      setPrice(totalPrice);
    } else if (totalGuest === 2) {
      const totalPrice = (room.pricePerNight + 100) * (count + 1);
      setPrice(totalPrice);
    } else {
      const totalPrice =
        (room.pricePerNight + 100 + (totalGuest - 2) * 350) * (count + 1);
      setPrice(totalPrice);
    }

    setTotalGuest(totalGuest);

    // }
  }, [adult, child, dateReduxState.startDate, dateReduxState.endDate]);

  return (
    <>
      <Container className="my-3">
        <Row>
          <div className="col-lg-3 col-md-4 ">
            <img src={about2} alt="img" className="img-fluid" />
          </div>
          <div className="col-md-8 col-lg-6  p-3 ">
            <h4>{room.name}</h4>
            <span>1 king | {room.guestCapacity} adult |</span>
            <p>{room.desc}</p>
            <div className="d-flex justify-content-between">
              <span>₹{room.pricePerNight}</span>
              <Link className="mx-4 link" to="">
                Room Details
              </Link>
            </div>

            <div className="d-flex mt-2">
              <span className="mx-2">Number of Rooms:</span>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                style={{ width: "20%" }}
                value={roomNo}
                onChange={handleRoomnoChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                {/* <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option> */}
              </select>
            </div>

            <Modal show={showAlert} onHide={() => setShowAlert(false)}>
              <Modal.Header className="bg-grey" closeButton>
                <Modal.Title className="division-subheading">
                  {room.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <span className="fw-bold">
                    Guest capacity: {room.guestCapacity} |
                  </span>
                  <span className="fw-bold">
                    {" "}
                    Price: {room.pricePerNight} &#8377;
                  </span>
                </div>
                <p>
                  This room can accomodate only {room.guestCapacity} persons
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="book-now-btn px-3"
                  onClick={() => setShowAlert(false)}
                >
                  OK
                </Button>
              </Modal.Footer>
            </Modal>

            {roomNo !== "0" && (
              <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">
                      Adult <br />
                    </th>
                    <th scope="col">
                      Child <br />{" "}
                      <small className="text-muted">(Age 5-12 yrs)</small>{" "}
                    </th>
                    <th scope="col">
                      Room Price <br />{" "}
                      <small className="text-muted">{`for ${
                        count + 1
                      } night(s)`}</small>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(parseInt(roomNo))].map((room, key) => {
                    return (
                      <tr>
                        <th scope="row"></th>
                        <td>
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            value={adult}
                            onChange={(e) => updateAdult(0, e.target.value)}
                          >
                            {[...Array(parseInt(n))].map((e, i) => {
                              return (
                                <option value={i + 1}>{i + 1} Adult</option>
                              );
                            })}
                          </select>
                        </td>
                        <td>
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            value={child}
                            onChange={(e) =>
                              updateChild_5to7(0, e.target.value)
                            }
                          >
                            <option value="0">0 Child</option>
                            <option value="1">1 Child</option>
                          </select>
                        </td>
                        {/* <td>
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            value={belowChild}
                            onChange={(e) =>
                              updateBelowChild(0, e.target.value)
                            }
                          >
                            <option value="0">0 Child</option>
                            <option value="1">1 Child</option>
                          </select>
                        </td> */}
                        <td>
                          <span>INR {price}</span>
                        </td>
                        <button
                          className="btn add-cart-btn  d-none d-sm-block"
                          onClick={addFoodToCart}
                          disabled={roominfo?.isAddedToCart}
                        >
                          {" "}
                          Add Room
                        </button>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <button
              className="btn add-cart-btn d-block d-sm-none float-end"
              onClick={addFoodToCart}
              disabled={roominfo?.isAddedToCart}
            >
              {" "}
              Add Room
            </button>
              </>
            )}
            
          </div>
        </Row>
      </Container>
    </>
  );
}

export default RoomBookingCard;
