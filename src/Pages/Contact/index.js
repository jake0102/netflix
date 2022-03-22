import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'

function Contact(){

    const value = useContext(ThemeContext)

    return(
        <div className={`contact ${value.wrapperTheme}`}>
            <div className="contact-container">
                <PageTitle title="TALK TO ME" childTitle="CONTACT"/>
            </div>
        </div>
    )
}

export default Contact