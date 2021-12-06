import { Form, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import validateBusinessRegistration from "../../helpers/businessRegistrationHelper";
import img from "../../img/businessRegistrationForm.jpg";
import "../../css/businessRegistration.css";

const notify = (message) => toast(message);

function BusinessRegistrationComp({ text, clickHandler = (f) => f }) {
  return (
    <>
      <h1>Registration to Customers Management as company</h1>
      <Container className="form-container-business">
        <Form>
          <h4>Fill all the fields and login to our site!</h4>
          <div className="form-fields-business">
            <Form.Group
              className="mb-3 form-inputs-business"
              controlId="formBasicEmail"
            >
              <Form.Label>Email Address:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group
              className="mb-3 form-inputs-business"
              controlId="formBasicPassword"
            >
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Form.Group
              className="mb-3 form-inputs-business"
              controlId="formBasicName"
            >
              <Form.Label>Full Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>

            <Button
              id="signInBtn"
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                var validatioErrorOrData = validateBusinessRegistration(
                  "formBasicEmail",
                  "formBasicPassword",
                  "formBasicName"
                );
                if (typeof validatioErrorOrData == "string") {
                  notify(validatioErrorOrData);
                } else {
                  clickHandler(validatioErrorOrData);
                }
              }}
            >
              {text}
            </Button>
            <div className="ReminderForAccount-business">
              Already have account? login <a href="/login">here</a>
            </div>
          </div>
          <div className="form-content-right-business">
            <img
              className="business-form-img"
              src={img}
              alt="two pepole use one of them phone"
            ></img>
          </div>
        </Form>
      </Container>
    </>
  );
}
export default BusinessRegistrationComp;
