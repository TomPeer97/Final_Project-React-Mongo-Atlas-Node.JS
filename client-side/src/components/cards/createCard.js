import { Form, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import CreateCardValid from "../../helpers/createCard";
import { insertNewCard } from "../../helpers/FetchHelper";
import "../../css/createCard.css";
import "../../css/myCard.css";
import img from "../../img/yourCard.png";

const notify = (message) => toast(message);

function CreateCardComp({ params, clickHandler = (f) => f }) {
  console.log(params);
  return (
    <>
      <h1>Create your Smart Business Card!</h1>
      <Container className="form-container-create">
        <Form>
          <h4>
            Fill all the information about your company and create your card!
          </h4>
          <div className="form-fields-create">
            <Form.Group
              className="mb-3 form-inputs-create"
              controlId="formBasicBusinessName"
            >
              <Form.Label>Business Name:</Form.Label>
              <Form.Control type="text" placeholder="Your business name" />
            </Form.Group>

            <Form.Group
              className="mb-3 form-inputs-create"
              controlId="formBasicBusinessDescription"
            >
              <Form.Label>Business Description:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your business description"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 form-inputs-create"
              controlId="formBasicBusinessAddress"
            >
              <Form.Label>Business Address:</Form.Label>
              <Form.Control type="text" placeholder="Your business address" />
            </Form.Group>
            <Form.Group
              className="mb-3 form-inputs-create"
              controlId="formBasicBusinessPhone"
            >
              <Form.Label>Business Phone:</Form.Label>
              <Form.Control type="text" placeholder="Your business phone" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              id="createCardBtn"
              onClick={(e) => {
                e.preventDefault();
                var cardValidate = CreateCardValid(
                  "formBasicBusinessName",
                  "formBasicBusinessDescription",
                  "formBasicBusinessAddress",
                  "formBasicBusinessPhone",
                  "formBasicBusinessImage"
                );
                if (typeof cardValidate == "string") {
                  notify(cardValidate);
                } else {
                  insertNewCard(
                    cardValidate,
                    localStorage.getItem("token"),
                    () => {}
                  );
                  window.location.href = "http://localhost:3001/my-cards";
                }
              }}
            >
              Create Card
            </Button>
          </div>
          <div className="form-content-right-create">
            <img
              className="form-img-create"
              src={img}
              alt="Our smart card"
            ></img>
          </div>
        </Form>
      </Container>
    </>
  );
}
export default CreateCardComp;
