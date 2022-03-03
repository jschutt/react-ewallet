import { useSelector } from "react-redux";
import Cards from 'react-credit-cards'

const ActiveCard = () => {
  const { cards } = useSelector((state) => state.cards);

  return (
    <div>
      <h1>Active Card</h1>
      {cards.map(
        (card, i) =>
          card.active && (
            <div key={i}>
              <Cards
                name={card.cardholder}
                number={card.cardnumber}
                expiry={card.expiry}
                cvc={card.cvc}
                issuer={card.issuer}
                preview={true}
              />
            </div>
          )
      )}
    </div>
  );
};

export default ActiveCard;
