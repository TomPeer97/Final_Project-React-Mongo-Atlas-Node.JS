import { Button } from "react-bootstrap";
import CardsComp from "../components/cards/CardsComp";
import { Route, Link } from "react-router-dom";
import { getMeCards, deleteCard } from "../helpers/FetchHelper";
import { useEffect, useState } from "react";
import UpdateCardComp from "../components/cards/updateCard";

//father of cardsComp and cardComp
function MyCardsPage({ set, user }) {
  //for edit
  const [isEdit, setIsEdit] = useState(false);

  const [editToUpdate, setEditToUpdate] = useState("");
  //get me the cards
  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token"))
      getMeCards(localStorage.getItem("token"), (data) => {
        setCards(data);
      });
  }, []);

  function editThisCard(card) {
    setEditToUpdate(card);
  }

  const deleteThisCard = (id) => {
    deleteCard(id, localStorage.getItem("token"), (card) => {
      setCards(cards.filter((x) => x._id !== id));
    });
  };

  return (
    <>
      <h1>See your business cards!</h1>
      {!isEdit && (
        <CardsComp
          deleteThisCard={deleteThisCard}
          editThisCard={editThisCard}
          setIsEdit={setIsEdit}
          setCards={setCards}
          cards={cards}
        ></CardsComp>
      )}

      {isEdit && <UpdateCardComp editToUpdate={editToUpdate}></UpdateCardComp>}

      <Button variant="primary">
        <Route>
          <Link to="/createCard" id="myCardBtn">
            Create your card
          </Link>
        </Route>
      </Button>
    </>
  );
}
export default MyCardsPage;
