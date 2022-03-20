import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'

function Project(){

    const value = useContext(ThemeContext)

    return(
        <div className={`project ${value.theme}`}>
            <h1>Project Page</h1>
        </div>
    )
}

export default Project