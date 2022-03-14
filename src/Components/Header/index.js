import { useContext } from 'react'

import Logo from './Logo'
import Nav from './Nav'
import Other from './Other'
import { ThemeContext } from '../../ThemeContext'

function Header(){

    const value = useContext(ThemeContext)

    return(
        <div className={`header ${value.theme}`}>
            <div className="header__container">
                <Logo />
                <Nav />
                <Other />
            </div>
        </div>
    )
}

export default Header