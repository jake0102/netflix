import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'

function Register(){

    const value = useContext(ThemeContext)

    return(
        <div className={`register ${value.theme}`}>
            <h1>Register Page</h1>
        </div>
    )
}

export default Register