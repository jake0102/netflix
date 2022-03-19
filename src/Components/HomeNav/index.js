import { faUser, faCode, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

import NavItem from './NavItem'

function HomeNav(){

    return (
        <div className="home-nav">
            <NavItem myIcon={faQuestion} myColor="#358dca" view="about" contents="About"/>
            <NavItem myIcon={faUser} myColor="#f5c868" view="more" contents="More"/>
            <NavItem myIcon={faCode} myColor="#5fa095" view="lang" contents="Language"/>
            <NavItem myIcon={faHeart} myColor="#f63609" view="like" contents="Like"/>
        </div>
    )
}

export default HomeNav