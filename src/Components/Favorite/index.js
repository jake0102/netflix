import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball, faMusic, faGamepad, faFlag } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'

function Favorite(){

    const value = useContext(ThemeContext)

    return (
        <div className="favorite">
            <div className="favorite-title mb-3">
                <span>MY FAVORITE</span>
            </div>

            <div className="favorite-container mb-5">
                <div className="favorite-container-tilte">
                    <span style={{color: 'rgb(218, 105, 105)'}} >Sport</span>
                    <FontAwesomeIcon icon={faBasketball} style={{marginLeft: '1rem', color: 'rgb(218, 105, 105)'}}/>
                </div>
                
            </div>

            <div className="favorite-container mb-5">
                <div className="favorite-container-tilte">
                    <span style={{color: '#f5c868'}} >Music</span>
                    <FontAwesomeIcon icon={faMusic} style={{marginLeft: '1rem', color: '#f5c868'}}/>
                </div>
                
            </div>
            
            <div className="favorite-container mb-5">
                <div className="favorite-container-tilte">
                    <span style={{color: '#8abc43'}} >Game</span>
                    <FontAwesomeIcon icon={faGamepad} style={{marginLeft: '1rem', color: '#8abc43'}}/>
                </div>
                
            </div>

            <div className="favorite-container">
                <div className="favorite-container-tilte">
                    <span style={{color: '#339dcc'}} >Nation</span>
                    <FontAwesomeIcon icon={faFlag} style={{marginLeft: '1rem', color: '#339dcc'}}/>
                </div>
                
            </div>

            <div className={value.headerTheme} style={{height: '50px'}}></div>
        </div>
    )
}

export default Favorite