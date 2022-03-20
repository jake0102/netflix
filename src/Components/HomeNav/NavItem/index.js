import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import clsx from 'clsx'

import styles from './NavItem.module.scss'
import { ChangeView } from '../../../Pages/Home'
import { ThemeContext } from '../../../ThemeContext'

function NavItem(props){

    const value = useContext(ThemeContext)

    const views = useContext(ChangeView)

    const classes = clsx({
        [styles.Ani]: views.Ani
    })

    return (
        <div className="home-nav-container" onClick={()=> views.getView(props.myView)}>
            <div className={`home-nav-label ${value.rightNavTheme} ${classes}`} >
                <span>{props.myContents}</span>
            </div>
            <div className={`home-nav-icon ${value.rightNavTheme}`} >
                <FontAwesomeIcon icon={props.myIcon} style={{color: `${props.myColor}`}}/>
            </div>
        </div>
    )
}

export default NavItem