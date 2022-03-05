import { useSelector } from "react-redux";
import Cards from 'react-credit-cards'
import s from './css/ActiveCard.module.scss'

const ActiveCard = () => {
  const { cards } = useSelector((state) => state.cards);

  return (
    <div>
      {cards.map(
        (card, i) =>
          card.active && (
            <div key={i} className={s.activeCardContainer}>
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
