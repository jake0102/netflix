import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'
import RenameLater from '../../Components/RenameLater'

function Project(){

    const value = useContext(ThemeContext)

    return(
        <div className={`project ${value.wrapperTheme}`}>
            <div className="project-container">
                <PageTitle title="WHAT DOES?" childTitle="PROJECT"/>
                <RenameLater />
            </div>
        </div>
    )
}

export default Project