import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import FirstLook from '../../Components/FirstLook'

function Home(){

    const value = useContext(ThemeContext)

    return(
        <div className={`home ${value.wrapperTheme}`}>
            <FirstLook />
        </div>
    )
}

export default Home