import { useContext, createContext, useState } from 'react'

import { ThemeContext } from '../../ThemeContext'
import AboutMe from '../../Components/AboutMe'
import More from '../../Components/More'
import Skill from '../../Components/Skill'
import Like from '../../Components/Like'
import HomeNav from '../../Components/HomeNav'

export const ChangeView = createContext()

function Home(){

    const [showAbout, setShowAbout] = useState(true)
    const [showMore, setShowMore] = useState(false)
    const [showSkill, setShowSkill] = useState(false)
    const [showLike, setShowLike] = useState(false)

    const value = useContext(ThemeContext)

    const getView = (view) => {
        switch(view){
            case 'about':
                setShowAbout(true)
                setShowMore(false)
                setShowSkill(false)
                setShowLike(false)
                break;
            case 'more':
                setShowAbout(false)
                setShowMore(true)
                setShowSkill(false)
                setShowLike(false)
                break;
            case 'skill':
                setShowAbout(false)
                setShowMore(false)
                setShowSkill(true)
                setShowLike(false)
                break;
            case 'like':
                setShowAbout(false)
                setShowMore(false)
                setShowSkill(false)
                setShowLike(true)
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
                {showLike && <Like />}
            </ChangeView.Provider>
        </div>
    )
}

export default Home