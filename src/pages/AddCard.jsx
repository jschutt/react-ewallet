import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {addCard} from '../redux/cardSlice'
import Card from '../components/Card'

const AddCard = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

    //TODO: Fixa så att type blir dynamisk
  const [type, setType] = useState("");

  const myCards = useSelector((state) => state.cards.cards)

  //console.log(cardholder);

  //FIXME: Blir error när du reloadar denna sidan
  useEffect(() => {
      let cardholderName = document.querySelector("#cardholderName");
      myCards.map((card) => {
        if(card.active){
          setName(card.cardholder);
        }
      })
      //cardholderName.value = name;
  }, [])

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    let value = e.target.value;
    setName(value);
    console.log(value)
  }

  const handleAddCard = () => {
    dispatch(addCard({
      cardholder: name,
      cardnumber: number,
      expiry: expiry,
      cvc: cvc,
      type: "VISA",
      active: false,
    }))
  }

  return (
    <div>
      <h1>Add a new bank card</h1>
      <Card name={name} number={number} expiry={expiry} cvc={cvc}/>
      <form>
      {name.length === 0 ? <input type="text" onChange={(e) => {setName(e.target.value)}} placeholder="Cardholder's name"/> 
      : <input type="text" id="cardholderName" disabled/>}
        <input type="number" onChange={(e) => {setNumber(e.target.value)}} placeholder="Card number" />
        <input type="number" onChange={(e) => {setExpiry(e.target.value)}} placeholder="Valid thru" />
        <input type="number" onChange={(e) => {setCvc(e.target.value)}} placeholder="CVC" />
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
