import Logo from './Logo'
import Nav from './Nav'
import Noti from './Noti'

function Header(){
    return(
        <div className="header">
            <div className="header__container">
                <Logo />
                <Nav />
                <Noti />
            </div>
        </div>
    )
}

export default Header