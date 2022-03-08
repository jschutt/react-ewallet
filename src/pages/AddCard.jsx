import React from 'react'
import Cards from 'react-credit-cards'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {addCard} from '../redux/cardSlice'
import Header from '../components/Header.jsx'
import s from './css/Pages.module.scss'
import 'react-credit-cards/es/styles-compiled.css';

const AddCard = () => {
  const [name, setName] = useState("Cardholder's name");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [issuer, setIssuer] = useState("visa");

  const myCards = useSelector((state) => state.cards.cards)
  const {latestId} = useSelector((state) => state.cards)

  useEffect(() => {
      myCards.forEach((card) => {
        if(card.active){
          setName(card.cardholder);
        }
      })
  }, [])

  const history = useHistory();
  const dispatch = useDispatch();

  const redirectPage = () => {
    history.push("/");
  }

  const handleAddCard = () => {
    let month = expiry.slice(0, 2);
    month = +month;

    if(month > 12){
      alert("Invalid expiry date. Please select the correct month.")
    } else {
      dispatch(addCard({
        cardholder: name,
        cardnumber: number,
        expiry: expiry,
        cvc: cvc,
        issuer: issuer,
        active: false,
        id: latestId + 1
      }))
      redirectPage();
    }
  }

  const handleInputFocus = ({target}) => {
    setFocus(target.name);
  }

  const handleChangeState = (e, myState) => {
    myState(e.target.value)
  }

  const handleOnInput = (e, num) => {
    e.target.value = e.target.value.slice(0, num)
  }

  const handleIssuerState = () => {
    let value = document.querySelector('select[name^="cardType"]').value
    setIssuer(value);
  }

  return (
    <div className={s.pageContainer}>
      <Header />
      <div className={s.bodyContainer}>
      <h2 className={s.addCardTitle}>New bank card</h2>
      <div className={s.addCardContainer}>
      <Cards name={name} number={number} expiry={expiry} cvc={cvc} focused={focus} issuer={issuer} preview={true}/>
      </div>
      <form className={s.cardForm}>
        <label htmlFor="cardholderName">Cardholder's name</label>
        <input type="text" name="name" onFocus={handleInputFocus} id="cardholderName" value={name} placeholder="Cardholder's name" disabled required/>
        <label htmlFor="cardNumber">Card number</label>
        <input type="number" name="number" id="cardNumber" onFocus={handleInputFocus} onChange={(e) => handleChangeState(e, setNumber)} onInput={(e) => handleOnInput(e, 16)} placeholder="" required/>
        <label htmlFor="expiry">Valid thru</label>
        <input type="number" name="expiry" id="expiry" onFocus={handleInputFocus} onChange={(e) => handleChangeState(e, setExpiry)} onInput={(e) => handleOnInput(e, 4)} placeholder="MM/YY" required/>
        <input type="number" name="cvc" onFocus={handleInputFocus} onChange={(e) => handleChangeState(e, setCvc)} onInput={(e) => handleOnInput(e, 3)} placeholder="CVC" required/>
        <label htmlFor="cardType">Vendor</label>
        <select name="cardType" id="cardType" onChange={handleIssuerState} required>
          <option value="visa">VISA</option>
          <option value="mastercard">MasterCard</option>
          <option value="discover">Discover</option>
          <option value="hipercard">Hipercard</option>
        </select>
      </form>
      <button className={s.addCardBtn} onClick={handleAddCard} disabled={(number.length === 16 && expiry.length === 4 && cvc.length === 3 ? false : true)}>Add card</button>
      </div>
    </div>
  );
};

export default AddCard;
