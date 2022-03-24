import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'
import ContactContents from '../../Components/ContactContents'

function Contact(){

    const value = useContext(ThemeContext)

    return(
        <div className={`contact ${value.wrapperTheme}`}>
            {/* <div className="contact-container">
                <PageTitle title="GET IN TOUCH" childTitle="CONTACT"/>
            </div> */}
            <ContactContents />
        </div>
    )
}

export default Contact