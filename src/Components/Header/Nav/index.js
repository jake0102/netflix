import { Link } from 'react-router-dom'

function Nav(){

    const handleActive = (e) => {

        const activedItem = document.querySelector('.header__nav__item.active')

        activedItem.classList.remove('active')

        e.target.classList.add('active')
    }

    return(
        <div className="header__nav">
            <Link to="/" className="header__nav__item active" onClick={(e) => handleActive(e)}>
                Home
            </Link>

            <Link to="/Product" className="header__nav__item" onClick={(e) => handleActive(e)}>
                Product
            </Link>

            <Link to="/Blog" className="header__nav__item" onClick={(e) => handleActive(e)}>
                Blog
            </Link>

            <Link to="/Contact" className="header__nav__item" onClick={(e) => handleActive(e)}>
                Contact
            </Link>

            <Link to="/About" className="header__nav__item" onClick={(e) => handleActive(e)}>
                About
            </Link>
        </div>
    )
}

export default Nav