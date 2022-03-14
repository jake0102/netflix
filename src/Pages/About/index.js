import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'

function About(){

    const value = useContext(ThemeContext)

    return(
        <div className={`about ${value.theme}`}>
            <h1>About Page</h1>
        </div>
    )
}

export default About