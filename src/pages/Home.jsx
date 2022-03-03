import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUser} from '../redux/cardSlice.js'
import CardList from '../components/CardList.jsx'
import ActiveCard from '../components/ActiveCard.jsx'


const Home = () => {
    //const {cardholder, cardnumber, expiry, cvc} = useSelector((state) => state.cards.activeCard)
    const cards = useSelector((state) => state.cards.cards);

    const dispatch = useDispatch();
    useEffect(() => {
        cards.forEach((card) => {
            if(card.active && card.cardholder.length === 0){
                dispatch(getUser())
            }
        })
    }, [])

    return (
        <div>
            <h1>Home page</h1>
            <ActiveCard />
            <Link to={`/addcard`}><button>Add card</button></Link>
            <CardList />
        </div>
    )
}

export default Home;