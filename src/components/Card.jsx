import 'react-credit-cards/es/styles-compiled.css';
import {useSelector} from 'react-redux'
import Cards from 'react-credit-cards'

const Card = ({name, number, expiry, cvc}) => {
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