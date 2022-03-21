import { useContext, createContext, useState } from 'react'

import { ThemeContext } from '../../ThemeContext'
import AboutMe from '../../Components/AboutMe'
import More from '../../Components/More'
import Skill from '../../Components/Skill'
import Favorite from '../../Components/Favorite'
import HomeNav from '../../Components/HomeNav'

export const ChangeView = createContext()

function Home(){

    const [showAbout, setShowAbout] = useState(true)
    const [showMore, setShowMore] = useState(false)
    const [showSkill, setShowSkill] = useState(false)
    const [showFavorite, setShowFavorite] = useState(false)

    const value = useContext(ThemeContext)

    const getView = (view) => {
        switch(view){
            case 'about':
                setShowAbout(true)
                setShowMore(false)
                setShowSkill(false)
                setShowFavorite(false)
                break;
            case 'more':
                setShowAbout(false)
                setShowMore(true)
                setShowSkill(false)
                setShowFavorite(false)
                break;
            case 'skill':
                setShowAbout(false)
                setShowMore(false)
                setShowSkill(true)
                setShowFavorite(false)
                break;
            case 'Favorite':
                setShowAbout(false)
                setShowMore(false)
                setShowSkill(false)
                setShowFavorite(true)
        }
    }

    const views = {
        getView
    }

    return(
        <div className={`home ${value.wrapperTheme}`}>
            <ChangeView.Provider value={views}>
                <HomeNav />
                {showAbout && <AboutMe />}
                {showMore && <More />}
                {showSkill && <Skill />}
                {showFavorite && <Favorite />}
            </ChangeView.Provider>
        </div>
    )
}

export default Home