import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {addCard} from '../redux/cardSlice'
import Card from '../components/Card'

const AddCard = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [type, setType] = useState("");
  
  //TODO: Fixa så att type blir dynamisk

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
      <input type="text" onChange={(e) => {setName(e.target.value)}} placeholder="Cardholder's name"/>
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
