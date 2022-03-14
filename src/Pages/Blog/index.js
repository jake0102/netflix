import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'

function Blog(){

    const value = useContext(ThemeContext)

    return(
        <div className={`blog ${value.theme}`}>
            <h1>Blog Page</h1>
        </div>
    )
}

export default Blog