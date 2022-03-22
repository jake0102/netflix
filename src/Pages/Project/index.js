import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import Container from '../../Components/ProjectContainer'

function Project(){

    const value = useContext(ThemeContext)

    return(
        <div className={`project ${value.wrapperTheme}`}>
            <Container />
        </div>
    )
}

export default Project