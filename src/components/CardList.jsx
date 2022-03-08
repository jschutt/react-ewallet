import { useSelector, useDispatch } from "react-redux";
import {setActiveCard, deleteCard} from '../redux/cardSlice'
import Cards from 'react-credit-cards'
import s from './css/CardList.module.scss'

//This is the old cardlist, new one is CardListCarousel

const CardList = () => {
  const { cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const handleDeleteCard = (id) => {
      dispatch(deleteCard(id))
  };

  const setActive = (user) => {    
    dispatch(setActiveCard({
      cardholder: user.cardholder,
      cardnumber: user.cardnumber,
      expiry: user.expiry,
      cvc: user.cvc,
      issuer: user.issuer,
      active: true,
      id: user.id
    }))
  }

  return (
    <div>
      <h1>CardList</h1>
      {cards.length > 0 &&
        cards.map((card, i) => (
          !card.active &&
          <div key={i} className={s.cardContainer}>
            <Cards
              name={card.cardholder}
              number={card.cardnumber}
              expiry={card.expiry}
              cvc={card.cvc}
              issuer={card.issuer}
              preview={true}
            />
            <div className={s.cardCover}>
            <button onClick={() => handleDeleteCard(card.id)}>Delete card</button>
            <button onClick={() => setActive(card)}>Set active</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardList;
