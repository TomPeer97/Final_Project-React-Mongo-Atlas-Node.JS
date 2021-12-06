import { Form, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import validateSimpleRegistration from "../../helpers/simpleRegistrationHelper";
import "../../css/simpleRegistration.css";
import img from "../../img/registrationForm.jpg";
const notify = (message) => toast(message);

function SimpleRegistrationComp({ text, clickHandler = (f) => f }) {
  return (
    <>
      <h1>Registration to Customers Management as client</h1>
      <Container className="form-container-simple">
        <Form>
          <h4>Fill all the fields and login to our site!</h4>
          <div className="form-fields-simple">
            <Form.Group
              className="mb-3 form-inputs-simple"
              controlId="formBasicEmail"
            >
              <Form.Label>Email Address:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group
              className="mb-3 form-inputs-simple"
              controlId="formBasicPassword"
            >
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Form.Group
              className="mb-3 form-inputs-simple"
              controlId="formBasicName"
            >
              <Form.Label>Full Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>

            <Button
              id="signUpBtn"
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                var validatioErrorOrData = validateSimpleRegistration(
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

            <div className="ReminderForAccount-simple">
              Already have account? login <a href="/login">here</a>
            </div>
          </div>
          <div className="form-content-right-simple">
            <img
              className="form-img-simple"
              src={img}
              alt="two pepole use one of them phone"
            ></img>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default SimpleRegistrationComp;
