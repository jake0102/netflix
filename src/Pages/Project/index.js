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
            title: '',
            colors: 'chocolate',
            imgSrc: Bird
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Dinosaur
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Quaraok
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Hanako
        },
        {
            title: '',
            colors: 'chocolate',
            imgSrc: Exc
        },
        {
            title: '',
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