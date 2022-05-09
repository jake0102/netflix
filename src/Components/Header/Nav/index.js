import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { ThemeContext } from '../../../ThemeContext'

function Nav(){

    const value = useContext(ThemeContext)

    const handleActive = (e) => {

        const activedItem = document.querySelector('.header-nav-item.active')

        activedItem.classList.remove('active')

        e.target.classList.add('active')
    }

    return(
        <div className="header-nav">
            <Link to="/" className={`header-nav-item ${value.navTheme} active`} onClick={(e) => handleActive(e)}>
                Home
            </Link>

            <Link to="/Project" className={`header-nav-item ${value.navTheme}`} onClick={(e) => handleActive(e)}>
                Project
            </Link>

            {/* <Link to="/Blog" className={`header-nav-item ${value.navTheme}`} onClick={(e) => handleActive(e)}>
                Blog
            </Link> */}

            <Link to="/Contact" className={`header-nav-item ${value.navTheme}`} onClick={(e) => handleActive(e)}>
                Contact
            </Link>

            {/* <Link to="/About" className={`header-nav-item ${value.navTheme}`} onClick={(e) => handleActive(e)}>
                About
            </Link> */}
        </div>
    )
}

export default Nav