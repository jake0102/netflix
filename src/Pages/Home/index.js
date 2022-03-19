import { useContext, createContext, useState } from 'react'

import { ThemeContext } from '../../ThemeContext'
import AboutMe from '../../Components/AboutMe'
import HomeNav from '../../Components/HomeNav'

export const ChangeView = createContext()

function Home(){

    const value = useContext(ThemeContext)

    const [Ani, setAni] = useState(false)

    const getView = (view) => {
        console.log(view);
        setAni(!Ani)
    }

    const views = {
        getView,
        Ani
    }

    return(
        <div className={`home ${value.wrapperTheme}`}>
            <ChangeView.Provider value={views}>
                <HomeNav />
                <AboutMe />
            </ChangeView.Provider>
        </div>
    )
}

export default Home