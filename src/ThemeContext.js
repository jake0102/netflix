import { useState, createContext } from 'react'

const ThemeContext = createContext()

function ThemeProvider( {children} ){
    const d = new Date
    let h = d.getHours()

    let nowTheme

    if(h >= 6 && h <= 18){
        nowTheme = 'light'
    }else{
        nowTheme = 'dark'
    }

    const [headerTheme, setHeaderTheme] = useState(`header-${nowTheme}`)

    const [navTheme, setNavTheme] = useState(`nav-${nowTheme}`)

    const [wrapperTheme, setWrapperTheme] = useState(`wrapper-${nowTheme}`)

    const [rightNavTheme, setRightNavTheme] = useState(`rightNav-${nowTheme}`)

    const [moreAboutMeTheme, setMoreAboutMeTheme] = useState(`moreAboutMe-${nowTheme}`)

    const [moreAboutMeTheme1, setMoreAboutMeTheme1] = useState(`moreAboutMe1-${nowTheme}`)

    const [moreAboutMeTheme2, setMoreAboutMeTheme2] = useState(`moreAboutMe2-${nowTheme}`)

    const [colTheme, setColTheme] = useState(`cricle-${nowTheme}`)

    const [contactTopTheme, setContactTopTheme] = useState(`contactTop-${nowTheme}`)

    const [blogDesTheme, setBlogDesTheme] = useState(`blog-description-${nowTheme}`)

    const toggleHeaderTheme = () => {
        setHeaderTheme(headerTheme === 'header-light' ? 'header-dark' : 'header-light')
        setNavTheme(navTheme === 'nav-light' ? 'nav-dark' : 'nav-light')
        setWrapperTheme(wrapperTheme === 'wrapper-light' ? 'wrapper-dark' : 'wrapper-light')
        setRightNavTheme(rightNavTheme === 'rightNav-light' ? 'rightNav-dark' : 'rightNav-light')
        setMoreAboutMeTheme(moreAboutMeTheme === 'moreAboutMe-light' ? 'moreAboutMe-dark' : 'moreAboutMe-light')
        setMoreAboutMeTheme1(moreAboutMeTheme1 === 'moreAboutMe1-light' ? 'moreAboutMe1-dark' : 'moreAboutMe1-light')
        setMoreAboutMeTheme2(moreAboutMeTheme2 === 'moreAboutMe2-light' ? 'moreAboutMe2-dark' : 'moreAboutMe2-light')
        setColTheme(colTheme === 'cricle-light' ? 'cricle-dark' : 'cricle-light')
        setContactTopTheme(contactTopTheme === 'contactTop-light' ? 'contactTop-dark' : 'contactTop-light')
        setBlogDesTheme(blogDesTheme === 'blog-description-light' ? 'blog-description-dark' : 'blog-description-light')
    }

    const value = {
        headerTheme,
        navTheme,
        wrapperTheme,
        rightNavTheme,
        moreAboutMeTheme,
        moreAboutMeTheme1,
        moreAboutMeTheme2,
        colTheme,
        contactTopTheme,
        blogDesTheme,
        toggleHeaderTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }