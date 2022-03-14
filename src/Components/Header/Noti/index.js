import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function Noti(){
    return(
        <Link className="header__noti" to="/Register"><FontAwesomeIcon icon={faBell} /></Link>
    )
}

export default Noti