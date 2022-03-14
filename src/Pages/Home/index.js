import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'

function Home(){

    const value = useContext(ThemeContext)

    return(
        <div className={`home ${value.theme}`}>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home