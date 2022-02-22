import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Link to={`/addcard`}><button>Add card</button></Link>
        </div>
    )
}

export default Home;