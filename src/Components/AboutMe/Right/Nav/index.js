import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ThemeContext } from '../../../../ThemeContext'

function Nav(){

    const value = useContext(ThemeContext)

    return (
        <div className="home-aboutMe-right-nav">
            <div className="home-aboutMe-right-container">
                <div className={`home-aboutMe-right-icon ${value.rightNavTheme}`} >
                    <FontAwesomeIcon icon={faQuestion} style={{color: '#358dca'}}/>
                </div>
            </div>

            <div className="home-aboutMe-right-container">
                <div className={`home-aboutMe-right-icon ${value.rightNavTheme}`}>
                    <FontAwesomeIcon icon={faUser} style={{color: 'rgb(245, 200, 104)'}}/>
                </div>
            </div>

            <div className="home-aboutMe-right-container">
                <div className={`home-aboutMe-right-icon ${value.rightNavTheme}`}>
                    <FontAwesomeIcon icon={faCode} style={{color: '#5fa095'}}/>
                </div>
            </div>

            <div className="home-aboutMe-right-container">
                <div className={`home-aboutMe-right-icon ${value.rightNavTheme}`}>
                    <FontAwesomeIcon icon={faHeart} style={{color: '#f63609'}}/>
                </div>
            </div>
        </div>
    )
}

export default Nav