import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUser} from '../redux/cardSlice.js'
import Header from '../components/Header.jsx'
import CardListCarousel from '../components/CardListCarousel.jsx'
import ActiveCard from '../components/ActiveCard.jsx'
import s from './css/Pages.module.scss'

const Home = () => {
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
        <div className={s.pageContainer}>
            <Header />
            <div className={s.bodyContainer}>
            <ActiveCard />
            <CardListCarousel />
            <Link to={`/addcard`}><button>Add card</button></Link>
            {/* <CardList /> */}
            </div>
        </div>
    )
}

export default Home;