import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'

function About(){

    const value = useContext(ThemeContext)

    return(
        <div className={`about ${value.wrapperTheme}`}>
            <div className="about-container">
                <PageTitle title="WHAT'S THIS?" childTitle="ABOUT"/>
            </div>
        </div>
    )
}

export default About