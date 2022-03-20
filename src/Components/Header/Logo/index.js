import { Link } from 'react-router-dom'

function Logo(){
    return(
        <Link to="/" className="header-logo">
            <span>Lambda</span>
        </Link>
    )
}

export default Logo