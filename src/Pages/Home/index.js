import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import AboutMe from '../../Components/AboutMe'

function Home(){

    const value = useContext(ThemeContext)

    return(
        <div className={`home ${value.wrapperTheme}`}>
            <AboutMe />
        </div>
    )
}

export default Home