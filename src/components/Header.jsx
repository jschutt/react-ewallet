import {useSelector} from 'react-redux'
import s from "./css/Header.module.scss";

const Header = () => {
    const {profileImg} = useSelector((state) => state.cards)
    const { cards } = useSelector((state) => state.cards);

    return (
        <header className={s.headerContainer}>
            <h1 className={s.myCardTitle}>My credit cards</h1>
            <p className={s.userName}>{cards[0].cardholder}</p>
            {/* <p className={s.userName}>{cards[0].cardholder}</p> */}
            <div className={s.imgContainer}>
            <img src={profileImg} alt="Profile picture" className={s.profileImg}/>
            </div>
        </header>
    )  
}

export default Header;