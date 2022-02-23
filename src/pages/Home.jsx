import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateCard, getUser} from '../redux/cardSlice.js'
import Card from '../components/Card.jsx'


const Home = () => {

    const [userData, setUserData] = useState([]);
    // const [name, setName] = useState("");
    // const [number, setNumber] = useState(0);
    //const {cards} = useSelector((state) => state)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    }, [])

    return (
        <div>
            <h1>Home page</h1>
            <Card />
            <Link to={`/addcard`}><button>Add card</button></Link>
        </div>
    )
}

export default Home;