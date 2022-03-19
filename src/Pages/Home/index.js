import { useContext, createContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import AboutMe from '../../Components/AboutMe'
import HomeNav from '../../Components/HomeNav'

export const ChangeView = createContext()

function Home(){

    const value = useContext(ThemeContext)

    const getView = (view) => {
        console.log(view);
    }

    const views = {
        getView
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