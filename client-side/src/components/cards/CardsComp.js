import CardComp from "./CardComp";

//father of cardcomp
function CardsComp({ cards, setIsEdit, editThisCard, deleteThisCard }) {
  console.log(cards);
  return cards.map((card) => (
    <CardComp
      setIsEdit={setIsEdit}
      editThisCard={editThisCard}
      deleteThisCard={deleteThisCard}
      card={card}
    ></CardComp>
  ));
}
export default CardsComp;
