import { faUser, faCode, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

import NavItem from './NavItem'

function HomeNav(){

    return (
        <div className="home-nav">
            <NavItem myIcon={faUser} myColor="rgb(218, 105, 105)" myView="about" myContents="About" />
            <NavItem myIcon={faQuestion} myColor="#f5c868" myView="more" myContents="More"/>
            <NavItem myIcon={faCode} myColor="#8abc43" myView="skill" myContents="Skill"/>
            <NavItem myIcon={faHeart} myColor="pink" myView="like" myContents="Like"/>
        </div>
    )
}

export default HomeNav