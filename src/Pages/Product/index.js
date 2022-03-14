import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'

function Product(){

    const value = useContext(ThemeContext)

    return(
        <div className={`product ${value.theme}`}>
            <h1>Product Page</h1>
        </div>
    )
}

export default Product