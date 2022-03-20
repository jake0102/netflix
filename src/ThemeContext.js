import { useState, createContext } from 'react'

const ThemeContext = createContext()

function ThemeProvider( {children} ){
    const [headerTheme, setHeaderTheme] = useState('header-light')

    const [navTheme, setNavTheme] = useState('nav-light')

    const [wrapperTheme, setWrapperTheme] = useState('wrapper-light')

    const [rightNavTheme, setRightNavTheme] = useState('rightNav-light')

    const [moreAboutMeTheme, setMoreAboutMeTheme] = useState('moreAboutMe-light')

    const [moreAboutMeTheme1, setMoreAboutMeTheme1] = useState('moreAboutMe1-light')

    const [moreAboutMeTheme2, setMoreAboutMeTheme2] = useState('moreAboutMe2-light')

    const toggleHeaderTheme = () => {
        setHeaderTheme(headerTheme === 'header-light' ? 'header-dark' : 'header-light')
        setNavTheme(navTheme === 'nav-light' ? 'nav-dark' : 'nav-light')
        setWrapperTheme(wrapperTheme === 'wrapper-light' ? 'wrapper-dark' : 'wrapper-light')
        setRightNavTheme(rightNavTheme === 'rightNav-light' ? 'rightNav-dark' : 'rightNav-light')
        setMoreAboutMeTheme(moreAboutMeTheme === 'moreAboutMe-light' ? 'moreAboutMe-dark' : 'moreAboutMe-light')
        setMoreAboutMeTheme1(moreAboutMeTheme1 === 'moreAboutMe1-light' ? 'moreAboutMe1-dark' : 'moreAboutMe1-light')
        setMoreAboutMeTheme2(moreAboutMeTheme2 === 'moreAboutMe2-light' ? 'moreAboutMe2-dark' : 'moreAboutMe2-light')
    }

    const value = {
        headerTheme,
        navTheme,
        wrapperTheme,
        rightNavTheme,
        moreAboutMeTheme,
        moreAboutMeTheme1,
        moreAboutMeTheme2,
        toggleHeaderTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }