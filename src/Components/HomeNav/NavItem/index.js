import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ThemeContext } from '../../../ThemeContext'
import { ChangeView } from '../../../Pages/Home'

function NavItem(props){

    const value = useContext(ThemeContext)

    const views = useContext(ChangeView)

    return (
        <div className="home-nav-container" onClick={() => views.getView(props.view)}>
            <div className={`home-nav-label ${value.rightNavTheme}`} >
                <span>{props.contents}</span>
            </div>
            <div className={`home-nav-icon ${value.rightNavTheme}`} >
                <FontAwesomeIcon icon={props.myIcon} style={{color: `${props.myColor}`}}/>
            </div>
        </div>
    )
}

export default NavItem