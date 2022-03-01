import { useSelector } from "react-redux";
import Card from "./Card.jsx";

const ActiveCard = () => {
  const { cards } = useSelector((state) => state.cards);

  return (
    <div>
      <h1>Active Card</h1>
      {cards.map(
        (card, i) =>
          card.active && (
            <div key={i}>
              <Card
                name={card.cardholder}
                number={card.cardnumber}
                expiry={card.expiry}
                cvc={card.cvc}
              />
            </div>
          )
      )}
    </div>
  );
};

export default ActiveCard;
