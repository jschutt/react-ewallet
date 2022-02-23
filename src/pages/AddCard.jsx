import Card from "../components/Card.jsx";

const AddCard = () => {
  return (
    <div>
      <h1>Add a new bank card</h1>
      <Card />
      <form>
        <input type="number" placeholder="Card number" />
        <input type="text" placeholder="Cardholder's name" />
        <input type="number" placeholder="Valid thru" />
        <input type="number" placeholder="CCV" />
        <select name="cardType" id="cardType">
          <option>VISA</option>
          <option>MasterCard</option>
        </select>
        <button>Add card</button>
      </form>
    </div>
  );
};

export default AddCard;
