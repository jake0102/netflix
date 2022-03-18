import { Link } from 'react-router-dom'

function Logo(){
    return(
        <Link to="/" className="header-logo">
            <span>Mega</span>
        </Link>
    )
}

export default Logo