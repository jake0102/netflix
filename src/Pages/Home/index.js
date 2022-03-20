import { useContext, createContext, useState } from 'react'

import { ThemeContext } from '../../ThemeContext'
import AboutMe from '../../Components/AboutMe'
import MoreAboutMe from '../../Components/MoreAboutMe'
import Language from '../../Components/Language'
import Like from '../../Components/Like'
import HomeNav from '../../Components/HomeNav'

export const ChangeView = createContext()

function Home(){

    const [Ani, setAni] = useState(true)

    const [showAbout, setShowAbout] = useState(true)
    const [showMore, setShowMore] = useState(false)
    const [showLang, setShowLang] = useState(false)
    const [showLike, setShowLike] = useState(false)

    const value = useContext(ThemeContext)

    const getView = (view) => {
        switch(view){
            case 'about':
                setShowAbout(true)
                setShowMore(false)
                setShowLang(false)
                setShowLike(false)
                break;
            case 'more':
                setShowAbout(false)
                setShowMore(true)
                setShowLang(false)
                setShowLike(false)
                break;
            case 'lang':
                setShowAbout(false)
                setShowMore(false)
                setShowLang(true)
                setShowLike(false)
                break;
            case 'like':
                setShowAbout(false)
                setShowMore(false)
                setShowLang(false)
                setShowLike(true)
        }
    }

    const views = {
        getView,
        Ani
    }

    return(
        <div className={`home ${value.wrapperTheme}`}>
            <ChangeView.Provider value={views}>
                <HomeNav />
                {showAbout && <AboutMe />}
                {showMore && <MoreAboutMe />}
                {showLang && <Language />}
                {showLike && <Like />}
            </ChangeView.Provider>
        </div>
    )
}

export default Home