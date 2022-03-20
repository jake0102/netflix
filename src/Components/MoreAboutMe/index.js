import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'

function MoreAboutMe(){

    const value = useContext(ThemeContext)

    return (
        <div className={`moreAboutMe-container ${value.moreAboutMeTheme}`}>
            <div className={`moreAboutMe-container-1 ${value.moreAboutMeTheme1}`} >
                <div className={`moreAboutMe-container-2 ${value.moreAboutMeTheme2}`}>
                    <div className='moreAboutMe-container-3'>
                        <div className='moreAboutMe-left'>
                            <div className='moreAboutMe-left-container'>
                                left
                            </div>
                        </div>
                        <div className='moreAboutMe-right'>
                            <div className='moreAboutMe-right-container'>
                                <div className='moreAboutMe-right-item'>1</div>
                                <div className='moreAboutMe-right-item'>2</div>
                            </div>
                            <div className='moreAboutMe-right-container'>
                                <div className='moreAboutMe-right-item'>3</div>
                                <div className='moreAboutMe-right-item'>4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreAboutMe