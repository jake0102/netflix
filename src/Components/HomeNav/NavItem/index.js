import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'

import { ChangeView } from '../../../Pages/Home'
import { ThemeContext } from '../../../ThemeContext'

function NavItem(props){

    const value = useContext(ThemeContext)

    const views = useContext(ChangeView)

    return (
        <div className="home-nav-container" onClick={() => views.getView(props.myView)} >
            <div className={`home-nav-icon ${value.rightNavTheme}`} >
                <div>{props.myContents}</div>
                <FontAwesomeIcon icon={props.myIcon} style={{color: `${props.myColor}`}}/>
            </div>
        </div>
    )
}

export default NavItem