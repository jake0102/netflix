import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'
import ProjectContents from '../../Components/ProjectContents'

function Project(){

    const value = useContext(ThemeContext)

    const contentsItems = [
        {
            title: 'Flappy Bird',
            colors: 'red'
        },
        {
            title: 'Dinosaur',
            colors: 'green'
        },
        {
            title: 'QuaraOK',
            colors: 'pink'
        },
        {
            title: 'FM Hanako',
            colors: 'blue'
        },
        {
            title: 'Exchange',
            colors: 'violet'
        },
        {
            title: 'Valorant',
            colors: 'chocolate'
        },
    ]

    return(
        <div className={`project ${value.wrapperTheme}`}>
            <div className="project-container">
                <PageTitle title="WHAT DOES?" childTitle="PROJECT"/>
                <ProjectContents contentsItems={contentsItems} />
            </div>
        </div>
    )
}

export default Project