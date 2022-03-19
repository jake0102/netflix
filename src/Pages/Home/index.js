import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import AboutMe from '../../Components/AboutMe'
import HomeNav from '../../Components/HomeNav'

function Home(){

    const value = useContext(ThemeContext)

    return(
        <div className={`home ${value.wrapperTheme}`}>
            <AboutMe />
            <HomeNav />
        </div>
    )
}

export default Home