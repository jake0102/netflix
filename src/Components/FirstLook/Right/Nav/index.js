import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

function Nav(){
    return (
        <div className="home-firstlook-right-nav">
            <div className="home-firstlook-right-container">
                <div className="home-firstlook-right-icon">
                    <FontAwesomeIcon icon={faQuestion} style={{color: '#358dca'}}/>
                </div>
            </div>

            <div className="home-firstlook-right-container">
                <div className="home-firstlook-right-icon">
                    <FontAwesomeIcon icon={faUser} style={{color: '#b77448'}}/>
                </div>
            </div>

            <div className="home-firstlook-right-container">
                <div className="home-firstlook-right-icon">
                    <FontAwesomeIcon icon={faCode} style={{color: '#5fa095'}}/>
                </div>
            </div>

            <div className="home-firstlook-right-container">
                <div className="home-firstlook-right-icon">
                    <FontAwesomeIcon icon={faHeart} style={{color: '#f63609'}}/>
                </div>
            </div>
        </div>
    )
}

export default Nav