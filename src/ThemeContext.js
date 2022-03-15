import { useState, createContext } from 'react'

const ThemeContext = createContext()

function ThemeProvider( {children} ){
    const [headerTheme, setHeaderTheme] = useState('header__light')

    const [wrapperTheme, setWrapperTheme] = useState('wrapper__light')

    const toggleHeaderTheme = () => {
        setHeaderTheme(headerTheme === 'header__light' ? 'header__dark' : 'header__light')
        setWrapperTheme(wrapperTheme === 'wrapper__light' ? 'wrapper__dark' : 'wrapper__light')
    }

    const value = {
        headerTheme,
        wrapperTheme,
        toggleHeaderTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }