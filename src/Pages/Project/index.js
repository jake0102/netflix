import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'
import ProjectContents from '../../Components/ProjectContents'
import Bird from './imgs/bird.jpg'
import Dinosaur from './imgs/dinosaur.png'
import Exc from './imgs/exchange.jpg'
import Valorant from './imgs/valorant.png'
import Quaraok from './imgs/Quaraok.png'
import Hanako from './imgs/Hanako.png'

function Project(){

    const value = useContext(ThemeContext)

    const contentsItems = [
        {
            title: 'Flappy Bird',
            colors: 'red',
            imgSrc: Bird
        },
        {
            title: 'Dinosaur',
            colors: 'green',
            imgSrc: Dinosaur
        },
        {
            title: 'QuaraOK',
            colors: 'pink',
            imgSrc: Quaraok
        },
        {
            title: 'FM Hanako',
            colors: 'blue',
            imgSrc: Hanako
        },
        {
            title: 'Exchange',
            colors: 'violet',
            imgSrc: Exc
        },
        {
            title: 'Valorant',
            colors: 'chocolate',
            imgSrc: Valorant
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