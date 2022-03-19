import { faUser, faCode, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

import NavItem from './NavItem'

function HomeNav(){

    return (
        <div className="home-nav">
            <NavItem myIcon={faQuestion} myColor="#358dca" view="about"/>
            <NavItem myIcon={faUser} myColor="#f5c868" view="more"/>
            <NavItem myIcon={faCode} myColor="#5fa095" view="lang"/>
            <NavItem myIcon={faHeart} myColor="#f63609" view="like"/>
        </div>
    )
}

export default HomeNav