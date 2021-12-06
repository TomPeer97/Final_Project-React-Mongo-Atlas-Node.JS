import CardsComp from "../components/cards/CardsComp";
import { useEffect, useState } from "react";
import { getMeAllCards } from "../helpers/FetchHelper";

function AllTheCards({ card }) {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    getMeAllCards(localStorage.getItem("token"), (data) => {
      setAllCards(data);
    });
  }, []);
  return <CardsComp cards={allCards}></CardsComp>;
}

export default AllTheCards;
