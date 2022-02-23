import {useSelector} from 'react-redux'
import Card from './Card'

const CardList = () => {
    const {cards} = useSelector((state) => state.cards)
    console.log(cards)
    return (
        <div>
            <h1>CardList</h1>
            {cards.length > 0 && cards.map((card, i) => (
            <Card key={i} name={card.cardholder} number={card.cardnumber} expiry={card.expiry} cvc={card.cvc}/>
            ))}
        </div>
    )
}

export default CardList;