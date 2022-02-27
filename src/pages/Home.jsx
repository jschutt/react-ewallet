import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateCard, getUser} from '../redux/cardSlice.js'
import Card from '../components/Card.jsx'
import CardList from '../components/CardList.jsx'


const Home = () => {
    const {cardholder, cardnumber, expiry, cvc} = useSelector((state) => state.cards.activeCard)
    console.log(cardholder)

    const dispatch = useDispatch();
    useEffect(() => {
        if(cardholder.length === 0){
            dispatch(getUser())
        }
    }, [])

    return (
        <div>
            <h1>Home page</h1>
            <Card name={cardholder} number={cardnumber} expiry={expiry} cvc={cvc}/>
            <Link to={`/addcard`}><button>Add card</button></Link>
            <CardList />
        </div>
    )
}

export default Home;