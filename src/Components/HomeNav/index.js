import { faUser, faCode, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

import NavItem from './NavItem'

function HomeNav(){
    return (
        <div className="home-nav">
            <NavItem myIcon={faQuestion} myColor="#358dca" myView="about" myContents="About" />
            <NavItem myIcon={faUser} myColor="#f5c868" myView="more" myContents="More" />
            <NavItem myIcon={faCode} myColor="#5fa095" myView="lang" myContents="Language" />
            <NavItem myIcon={faHeart} myColor="#f63609" myView="like" myContents="Like" />
        </div>
    )
}

export default HomeNav