import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import C3 from './C3'
import C4 from './C4'

function MoreAboutMe(){

    const value = useContext(ThemeContext)

    return (
        <div className={`moreAboutMe-container ${value.moreAboutMeTheme}`}>
            <div className={`moreAboutMe-container-1 ${value.moreAboutMeTheme1}`} >
                <div className={`moreAboutMe-container-2 ${value.moreAboutMeTheme2}`}>
                    <C3 />
                    <C4 />
                </div>
            </div>
        </div>
    )
}

export default MoreAboutMe