import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

function Other(){

    const [show, setShow] = useState(false)

    useEffect(()=>{
        
        const search = document.querySelector('.header__other__search')

        if(show){
            if(search.classList[1] == 'search__Hide'){
                search.classList.remove('search__Hide')
            }
            search.classList.add('search__Show')
        }else{
            if(search.classList[1] == 'search__Show'){
                search.classList.remove('search__Show')
            }
            search.classList.add('search__Hide')
        }
    }, [show])

    return(
        <div className="header__other">
            <div className="header__other__search" >
                <FontAwesomeIcon 
                    icon={faSearch} 
                    style={{margin: '0 10px 0 10px'}} 
                    onClick={() => setShow(!show)}
                />
                <input type="text" placeholder="Search..."/>
            </div>

            <Link className="header__other__register" to="/Register" >
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </div>
    )
}

export default Other