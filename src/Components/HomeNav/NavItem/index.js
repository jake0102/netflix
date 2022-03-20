import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ThemeContext } from '../../../ThemeContext'

function NavItem(props){

    const value = useContext(ThemeContext)

    return (
        <div className="home-nav-container">
            <div className={`home-nav-label ${value.rightNavTheme} `} >
                <span>{props.myContents}</span>
            </div>
            <div className={`home-nav-icon ${value.rightNavTheme}`} >
                <FontAwesomeIcon icon={props.myIcon} style={{color: `${props.myColor}`}}/>
            </div>
        </div>
    )
}

export default NavItem