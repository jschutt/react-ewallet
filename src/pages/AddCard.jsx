import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {addCard} from '../redux/cardSlice'
import Card from '../components/Card'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css';
import React from 'react'

const AddCard = () => {
  const [name, setName] = useState("Cardholder's name");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

    //TODO: Fixa så att type blir dynamisk
  const [type, setType] = useState("");

  const myCards = useSelector((state) => state.cards.cards)
  const {latestId} = useSelector((state) => state.cards)

  //FIXME: Error when you reload page
  useEffect(() => {
      myCards.forEach((card) => {
        if(card.active){
          setName(card.cardholder);
        }
      })
  }, [])

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    let value = e.target.value;
    setName(value);
    console.log(value)
  }

  const handleInputFocus = ({target}) => {
    setFocus(target.name);
  }

  const handleChangeState = (e, myState) => {
    myState(e.target.value)
  }

  //onInput={(e) => e.target.value = e.target.value.slice(0, 3)}

  const handleOnInput = (e, num) => {
    e.target.value = e.target.value.slice(0, num)
  }

  const handleAddCard = () => {

    dispatch(addCard({
      cardholder: name,
      cardnumber: number,
      expiry: expiry,
      cvc: cvc,
      type: "VISA",
      active: false,
      id: latestId + 1
    }))
  }

  return (
    //TODO: GLÖM EJ REQUIRED !!
    //TODO: Ta bort pilarna ifrån input numbers
    //TODO: Kolla Expiry date
    <div>
      <h1>Add a new bank card</h1>
      <Cards name={name} number={number} expiry={expiry} cvc={cvc} focused={focus}/>
      <form>
      {name.length === 0 ? <input type="text" onChange={(e) => {setName(e.target.value)}} placeholder="Cardholder's name"/> 
      : <input type="text" name="name" onFocus={handleInputFocus} id="cardholderName" value={name} placeholder="Cardholder's name" disabled/>}
        <input type="number" name="number" onFocus={handleInputFocus} onChange={(e) => handleChangeState(e, setNumber)} onInput={(e) => handleOnInput(e, 16)} placeholder="Card number" />
        <input type="number" name="expiry" onFocus={handleInputFocus} onChange={(e) => handleChangeState(e, setExpiry)} onInput={(e) => handleOnInput(e, 4)} placeholder="Valid thru" />
        <input type="number" name="cvc" onFocus={handleInputFocus} onChange={(e) => handleChangeState(e, setCvc)} onInput={(e) => handleOnInput(e, 3)} placeholder="CVC" />
        <select name="cardType" id="cardType">
          <option>VISA</option>
          <option>MasterCard</option>
        </select>
      </form>
      <Link to="/">
      <button onClick={handleAddCard}>Add card</button>
      </Link>
    </div>
  );
};

export default AddCard;
