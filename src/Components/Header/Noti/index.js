import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Noti(){
    return(
        <Link className="header__noti" to="/Register"><FontAwesomeIcon icon={faCoffee} /></Link>
    )
}

export default Noti