import Logo from './Logo'
import Nav from './Nav'
import Other from './Other'

function Header(){
    return(
        <div className="header">
            <div className="header__container">
                <Logo />
                <Nav />
                <Other />
            </div>
        </div>
    )
}

export default Header