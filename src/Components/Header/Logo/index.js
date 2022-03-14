import { Link } from 'react-router-dom'

function Logo(){
    return(
        <Link to="/" className="header__logo">
            <span>Netflix</span>
        </Link>
    )
}

export default Logo