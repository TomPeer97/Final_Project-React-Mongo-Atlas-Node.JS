import yourCard from "../img/yourCard.png";
import { Container, Row, Col } from "react-bootstrap";
import "../css/homePage.css";

function HomePage() {
  return (
    <>
      <Container id="container">
        <Row className="justify-content-md-center">
          <h1 id="header">Welcome to CM - Customers Management!</h1>
          <p>
            With us you can feel comfortable and efficient in managing your
            customers list!
          </p>
        </Row>
        <Row className="justify-content-md-center">
          <h3>So how it works?</h3>
          <p id="i3">
            You sign in to our site and create to your customers cards!
          </p>
        </Row>
        <div id="what2">
          <Row className="justify-content-xl-center" id="p3">
            <Col lg={7}>
              <h3>And what i have in the cards?</h3>
              <p>All you have in your card is: </p>
              <ol>
                <li>Business Name.</li>
                <li>Business Description.</li>
                <li>Business Addres.</li>
                <li>Business Phone Number.</li>
                <li>Business Image.</li>
              </ol>
            </Col>
            <Col lg={5}>
              <img src={yourCard} alt="Business Card" id="img2"></img>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
