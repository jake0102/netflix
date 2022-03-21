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
                                <div className="moreAboutMe-left-container-title">
                                    PERSONAL INFOS
                                </div>

                                <div className="moreAboutMe-left-container-contents">
                                    <div className="moreAboutMe-left-container-contents-left">
                                        <ul>
                                            <li>First Name: <span style={{fontWeight: "bold"}}>Steve</span></li>
                                            <li>Age: <span style={{fontWeight: "bold"}}>27 Years</span></li>
                                            <li>Freelance: <span style={{fontWeight: "bold"}}>Available</span></li>
                                            <li>Phone: <span style={{fontWeight: "bold"}}>+21621184010</span></li>
                                            <li>Skype: <span style={{fontWeight: "bold"}}>steve.milner</span></li>
                                        </ul>
                                    </div>
                                    <div className="moreAboutMe-left-container-contents-right">
                                        <ul>
                                            <li>Last Name: <span style={{fontWeight: "bold"}}>Milner</span></li>
                                            <li>Nationality: <span style={{fontWeight: "bold"}}>Tunisian</span></li>
                                            <li>Addness: <span style={{fontWeight: "bold"}}>Tunis</span></li>
                                            <li>Email: <span style={{fontWeight: "bold"}}>you@mail.com</span></li>
                                            <li>Languages: <span style={{fontWeight: "bold"}}>French, English</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='moreAboutMe-right'>
                            <div className='moreAboutMe-right-container'>
                                <div className='moreAboutMe-right-item'>
                                    <div className="moreAboutMe-right-item-content">
                                        <div className="moreAboutMe-right-item-content-top">
                                            12
                                        </div>
                                        <div className="moreAboutMe-right-item-content-bot">
                                            YEARS OF EXPERIENCE
                                        </div>
                                    </div>
                                </div>
                                <div className='moreAboutMe-right-item'>
                                    <div className="moreAboutMe-right-item-content">
                                        <div className="moreAboutMe-right-item-content-top">
                                            97
                                        </div>
                                        <div className="moreAboutMe-right-item-content-bot">
                                            COMPLETED PROJECTS
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='moreAboutMe-right-container'>
                                <div className='moreAboutMe-right-item'>
                                    <div className="moreAboutMe-right-item-content">
                                        <div className="moreAboutMe-right-item-content-top">
                                            81
                                        </div>
                                        <div className="moreAboutMe-right-item-content-bot">
                                            HAPPY <br />CUSTOMERS
                                        </div>
                                    </div>
                                </div>
                                <div className='moreAboutMe-right-item'>
                                    <div className="moreAboutMe-right-item-content">
                                        <div className="moreAboutMe-right-item-content-top">
                                            53
                                        </div>
                                        <div className="moreAboutMe-right-item-content-bot">
                                            AWARDS <br />WON
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="moreAboutMe-container-4">
                        <div className="moreAboutMe-container-4-contents">
                            <div className="moreAboutMe-container-4-contents-item">19</div>
                            <div className="moreAboutMe-container-4-contents-item">96</div>
                            <div className="moreAboutMe-container-4-contents-item">11</div>
                            <div className="moreAboutMe-container-4-contents-item">19</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreAboutMe