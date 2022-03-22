import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'

function Project(){

    const value = useContext(ThemeContext)

    return(
        <div className={`project ${value.wrapperTheme}`}>
            <div className="project-container">
                <PageTitle title="WHAT CAN I DO?" childTitle="MY PROJECTS"/>
            </div>
        </div>
    )
}

export default Project