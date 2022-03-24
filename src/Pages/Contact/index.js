import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import ContactContents from '../../Components/ContactContents'

function Contact(){

    const value = useContext(ThemeContext)

    return(
        <div className={`contact ${value.wrapperTheme}`}>
            <div className="contact-top">
                GET IN TOUCH
            </div>
            <div className="contact-top-real">
                CONTACT
            </div>
            

            <ContactContents />
        </div>
    )
}

export default Contact