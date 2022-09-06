import Card from "react-bootstrap/Card";

function SliderCard(props) {
  return (
    <div className=" d-flex justify-content-center">
      <Card style={{ width: "20rem" }} className="mt-5 mx-3 border-0">
        <Card.Img
          variant="top"
          alt="Card image"
          src={props.image}
          className="rounded-0 card-image"
        />
        <Card.Body className="p-0">
          <Card.Title
            className=" division-heading mt-2 card-title text-center"
            style={{ fontSize: "18px" }}
          >
            {props.title}
          </Card.Title>
          <Card.Subtitle
            className="mt-2 fw-semibold"
            style={{ fontSize: "14px" }}
          >
            {props.subTitle}
          </Card.Subtitle>
          <Card.Text
            className="text-wrap mt-3 card-description"
            style={{ fontSize: "14px" }}
          >
            { props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SliderCard;
