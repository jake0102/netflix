import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'
import ProjectContents from '../../Components/ProjectContents'

function Project(){

    const value = useContext(ThemeContext)

    const contentsItems = [
        {
            title: 'Flappy Bird',
            colors: 'red',
            imgSrc: ''
        },
        {
            title: 'Dinosaur',
            colors: 'green',
            imgSrc: ''
        },
        {
            title: 'QuaraOK',
            colors: 'pink',
            imgSrc: ''
        },
        {
            title: 'FM Hanako',
            colors: 'blue',
            imgSrc: ''
        },
        {
            title: 'Exchange',
            colors: 'violet',
            imgSrc: ''
        },
        {
            title: 'Valorant',
            colors: 'chocolate',
            imgSrc: ''
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