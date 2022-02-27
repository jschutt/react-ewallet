import { useSelector } from "react-redux";
import Card from "./Card";

const CardList = () => {
  const { cards } = useSelector((state) => state.cards);
  //console.log(cards)
  const deleteCard = () => {
      
  };

  return (
    <div>
      <h1>CardList</h1>
      {cards.length > 0 &&
        cards.map((card, i) => (
          <div key={i}>
            <Card
              name={card.cardholder}
              number={card.cardnumber}
              expiry={card.expiry}
              cvc={card.cvc}
            />
            <button>Delete card</button>
          </div>
        ))}
    </div>
  );
};

export default CardList;
