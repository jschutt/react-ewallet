import { useSelector, useDispatch } from "react-redux";
import { setActiveCard, deleteCard } from "../redux/cardSlice";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Cards from "react-credit-cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./css/CardList.module.scss";
import './css/CardList.module.scss'

const CardList = () => {
  const [index, setIndex] = useState(0);
  const { cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleDeleteCard = (id) => {
    dispatch(deleteCard(id));
  };

  const setActive = (user) => {
    dispatch(
      setActiveCard({
        cardholder: user.cardholder,
        cardnumber: user.cardnumber,
        expiry: user.expiry,
        cvc: user.cvc,
        issuer: user.issuer,
        active: true,
        id: user.id,
      })
    );
  };
    //TODO: ADD EMPTY CARD IF LIST IS EMPTY
  return (
    <div className={s.cardListBody}>
      <h1>All cards</h1>
      <Carousel className={s.carousel} activeIndex={index} onSelect={handleSelect} interval={null} variant={'dark'} >
        {cards.length > 0 &&
          cards.map(
            (card, i) =>
              !card.active && (
                <Carousel.Item key={i}>
                  <div className={s.cardListContainer}>
                    <Cards
                      name={card.cardholder}
                      number={card.cardnumber}
                      expiry={card.expiry}
                      cvc={card.cvc}
                      issuer={card.issuer}
                      preview={true}
                    />
                    <div className={s.cardCover}>
                      <button onClick={() => handleDeleteCard(card.id)}>
                        Delete card
                      </button>
                      <button onClick={() => setActive(card)}>
                        Set active
                      </button>
                    </div>
                  </div>
                </Carousel.Item>
              )
          )}
        {cards.length === 1 && (
          <Carousel.Item>
              <div className={s.emptyCardListContainer}>
                  <p>+</p>
              </div>
          </Carousel.Item>
      )}
      </Carousel>
    </div>
  );
};

export default CardList;
