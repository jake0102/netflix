import { useState, createContext } from 'react'

const ThemeContext = createContext()

function ThemeProvider( {children} ){
    const [headerTheme, setHeaderTheme] = useState('header-light')

    const [navTheme, setNavTheme] = useState('nav-light')

    const [wrapperTheme, setWrapperTheme] = useState('wrapper-light')

    const [rightNavTheme, setRightNavTheme] = useState('rightNav-light')

    const toggleHeaderTheme = () => {
        setHeaderTheme(headerTheme === 'header-light' ? 'header-dark' : 'header-light')
        setNavTheme(navTheme === 'nav-light' ? 'nav-dark' : 'nav-light')
        setWrapperTheme(wrapperTheme === 'wrapper-light' ? 'wrapper-dark' : 'wrapper-light')
        setRightNavTheme(rightNavTheme === 'rightNav-light' ? 'rightNav-dark' : 'rightNav-light')
    }

    const value = {
        headerTheme,
        navTheme,
        wrapperTheme,
        rightNavTheme,
        toggleHeaderTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }