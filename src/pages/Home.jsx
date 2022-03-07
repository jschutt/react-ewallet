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
        <div className={s.pageContainer} style={cards[0].cardholder.length > 0 ? {display: 'block'} : {display: 'none'} }>
            <Header />
            <div className={s.bodyContainer}>
            <ActiveCard />
            <CardListCarousel />
            <div className={s.homeAddBtnContainer}>
            <Link to={`/addcard`}><button className={s.homeAddBtn}>New card</button></Link>
            </div>
            {/* <CardList /> */}
            </div>
        </div>
    )
}

export default Home;