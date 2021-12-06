import { Card, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "../../css/cardComp.css";

//cardsComp son
function CardComp({
  card,
  deleteThisCard = null,
  setIsEdit = null,
  editThisCard = null,
}) {
  return (
    (card && (
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          padding: 20,
          margin: 10,
        }}
        id="card"
      >
        <Card.Img
          variant="top"
          style={{ width: 70 }}
          src={"https://cdn-icons-png.flaticon.com/512/1157/1157044.png"}
        />
        <Card.Body>
          <Card.Title>{card.bizName}</Card.Title>
          <hr></hr>
          <Card.Text>{card.bizDescription}</Card.Text>
          <hr></hr>
          <Card.Text>{card.bizAddress}</Card.Text>
          <hr></hr>
          <Card.Text>{card.bizPhone}</Card.Text>
          <hr></hr>
          <div className="cardBtnDiv">
            <ButtonControl
              deleteThisCard={deleteThisCard}
              card={card}
              setIsEdit={setIsEdit}
              editThisCard={editThisCard}
            />
          </div>
        </Card.Body>
      </Card>
    )) || <></>
  );
}
export default CardComp;

function ButtonControl({ deleteThisCard, card, setIsEdit, editThisCard }) {
  const editBtnEdit = editThisCard ? " inline-block" : "none";
  const editBtnDelete = deleteThisCard ? " inline-block" : "none";
  return (
    <>
      <Button
        className="removeCard"
        variant="primary"
        style={{ display: editBtnDelete }}
        onClick={(e) => {
          e.preventDefault();
          deleteThisCard(card._id);
        }}
      >
        <BsTrash></BsTrash>
      </Button>

      <Button
        className="editCard"
        variant="primary"
        style={{ display: editBtnEdit }}
        onClick={() => {
          setIsEdit(true);
          editThisCard(card);
        }}
      >
        <FiEdit></FiEdit>
      </Button>
    </>
  );
}
