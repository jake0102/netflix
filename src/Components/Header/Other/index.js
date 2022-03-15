import { useState, useEffect, useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLightbulb } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from '../../../ThemeContext'

function Other(){

    const [show, setShow] = useState(false)

    const searchRef = useRef()

    const value = useContext(ThemeContext)

    useEffect(()=>{
        if(show){
            if(searchRef.current.classList[1] == 'search__Hide'){
                searchRef.current.classList.remove('search__Hide')
            }
            searchRef.current.classList.add('search__Show')
        }else{
            if(searchRef.current.classList[1] == 'search__Show'){
                searchRef.current.classList.remove('search__Show')
            }
            searchRef.current.classList.add('search__Hide')
        }
    }, [show])

    return(
        <div className="header__other">
            <div className="header__other__search" ref={searchRef}>
                <FontAwesomeIcon 
                    icon={faSearch} 
                    style={{margin: '0 10px 0 10px'}} 
                    onClick={() => setShow(!show)}
                />
                <input type="text" placeholder="Search..."/>
            </div>

            <div className="header__other__theme">
                <FontAwesomeIcon icon={faLightbulb} onClick={value.toggleHeaderTheme}/>
            </div>
        </div>
    )
}

export default Other