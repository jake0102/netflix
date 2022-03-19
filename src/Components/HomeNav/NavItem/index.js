import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ThemeContext } from '../../../ThemeContext'

function NavItem(props){

    const value = useContext(ThemeContext)

    return (
        <div className="home-nav-container">
            <div className={`home-nav-icon ${value.rightNavTheme}`} >
                <FontAwesomeIcon icon={props.myIcon} style={{color: `${props.myColor}`}}/>
            </div>
        </div>
    )
}

export default NavItem