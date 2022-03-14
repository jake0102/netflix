import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'

function Contact(){

    const value = useContext(ThemeContext)

    return(
        <div className={`contact ${value.theme}`}>
            <h1>Contact Page</h1>
        </div>
    )
}

export default Contact