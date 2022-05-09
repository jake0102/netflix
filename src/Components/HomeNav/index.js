import { faUser, faCode, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

import NavItem from './NavItem'

function HomeNav(){

    return (
        <div className="home-nav">
            <NavItem myIcon={faUser} myColor="rgb(218, 105, 105)" myView="about" myContents="自分" />
            <NavItem myIcon={faQuestion} myColor="#f5c868" myView="more" myContents="詳細"/>
            <NavItem myIcon={faCode} myColor="#8abc43" myView="skill" myContents="スキル"/>
            <NavItem myIcon={faHeart} myColor="pink" myView="Favorite" myContents="好み"/>
        </div>
    )
}

export default HomeNav