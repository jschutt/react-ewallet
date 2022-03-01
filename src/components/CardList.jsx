import { useSelector, useDispatch } from "react-redux";
import {setActiveCard} from '../redux/cardSlice'
import Card from "./Card";

const CardList = () => {
  const { cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  //console.log(cards)
  const deleteCard = () => {
      
  };

  const setActive = (user) => {
    console.log(user)
    dispatch(setActiveCard(user))
  }

  return (
    <div>
      <h1>CardList</h1>
      {cards.length > 0 &&
        cards.map((card, i) => (
          !card.active &&
          <div key={i}>
            <Card
              name={card.cardholder}
              number={card.cardnumber}
              expiry={card.expiry}
              cvc={card.cvc}
            />
            <button>Delete card</button>
            <button onClick={() => setActive(card)}>Set active</button>
          </div>
        ))}
    </div>
  );
};

export default CardList;
