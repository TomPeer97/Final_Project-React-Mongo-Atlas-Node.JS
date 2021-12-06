import { Form, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import CreateCardValid from "../../helpers/createCard";
import { editCard } from "../../helpers/FetchHelper";
import "../../css/createCard.css";
import "../../css/myCard.css";
import img from "../../img/yourCard.png";

const notify = (message) => toast(message);

function UpdateCardComp({ editToUpdate }) {
  const { _id, bizName, bizDescription, bizAddress, bizPhone } = editToUpdate;
  console.log();
  return (
    <>
      <h1>Update your Smart Business Card!</h1>
      <Container className="form-container-create">
        <Form>
          <h4>
            Fill all the information about your company and update your card!
          </h4>
          <div className="form-fields-create">
            <Form.Group
              className="mb-3 form-inputs-create"
              controlId="formBasicBusinessName"
            >
              <Form.Label>Business Name:</Form.Label>
              <Form.Control type="text" defaultValue={bizName} />
            </Form.Group>

            <Form.Group
              className="mb-3 form-inputs-create"
              controlId="formBasicBusinessDescription"
            >
              <Form.Label>Business Description:</Form.Label>
              <Form.Control type="text" defaultValue={bizDescription} />
            </Form.Group>
            <Form.Group
              className="mb-3 form-inputs-create"
              controlId="formBasicBusinessAddress"
            >
              <Form.Label>Business Address:</Form.Label>
              <Form.Control type="text" defaultValue={bizAddress} />
            </Form.Group>
            <Form.Group
              className="mb-3 form-inputs-create"
              controlId="formBasicBusinessPhone"
            >
              <Form.Label>Business Phone:</Form.Label>
              <Form.Control type="text" defaultValue={bizPhone} />
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
                  "formBasicBusinessPhone"
                );

                if (typeof cardValidate == "string") {
                  notify(cardValidate);
                } else {
                  editCard(
                    cardValidate,
                    _id,
                    localStorage.getItem("token"),
                    () => {}
                  );

                  window.location.href = "http://localhost:3001/my-cards";
                }
              }}
            >
              Update Card
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
export default UpdateCardComp;
