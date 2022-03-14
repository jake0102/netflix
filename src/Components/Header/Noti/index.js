import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'

function Noti(){

    const [show, setShow] = useState(false)

    const searchRef = useRef()

    useEffect(()=>{


        // Cleanup function
        return () => {

        }
    })

    return(
        <div className="header__other">
            <div className="header__other__search" >
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <Link className="header__other__noti" to="/Register" ><FontAwesomeIcon icon={faBell} /></Link>
        </div>
    )
}

export default Noti