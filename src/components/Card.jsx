import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards'

const Card = ({name, number, expiry, cvc}) => {
    //TODO: Lägg till focused
    return (
        <div>
            <Cards 
            cvc={cvc}
            expiry={expiry}
            // focused={focus}
            name={name}
            number={number}
            />
        </div>
    )
}

export default Card;