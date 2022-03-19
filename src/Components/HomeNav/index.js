import { faUser, faCode, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

import NavItem from './NavItem'

function Nav(){
    return (
        <div className="home-nav">
            <NavItem myIcon={faQuestion} myColor="#358dca"/>
            <NavItem myIcon={faUser} myColor="#f5c868"/>
            <NavItem myIcon={faCode} myColor="#5fa095"/>
            <NavItem myIcon={faHeart} myColor="#f63609"/>
        </div>
    )
}

export default Nav