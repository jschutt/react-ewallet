import React from 'react'
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards'

const Card = ({name, number, expiry, cvc, focus}) => {
    //TODO: Lägg till focused
    //console.log(PropTypes)
    //console.log(Payment)

    return (
        <div>
            <Cards 
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
            preview={true}
            />
        </div>
    )
}

export default Card;