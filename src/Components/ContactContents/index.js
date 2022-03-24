import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Contact(){
    return (
        <div className="contact-contents">
            <div>
                <div className="contact-contents-x">
                    / Contact
                </div>

                <div className="contact-contents-title">
                    SOMETHING'S WRONG!
                </div>

                <div className="contact-contents-item1">
                    <div>
                        <span>Hey, my name is</span>
                        <input type="text" spellCheck="false" placeholder="Type here"/>
                    </div>

                    <div>
                        <span>and something wrong with</span>
                        <select>
                            <option selected disabled>&nbsp;</option>
                            <option>Home</option>
                            <option>Project</option>
                            <option>Blog</option>
                            <option>Contact</option>
                            <option>About</option>
                        </select>
                    </div>
                </div>

                <div className="contact-contents-item2">
                    <div>
                        <span>Get in touch with me at</span>
                        <input type="text" spellCheck="false" placeholder="Your email or phone number"/>
                        <span>!</span>
                    </div>
                </div>

                <div className="contact-contents-accept">
                    <input type="checkbox" />
                    <span>I here by accept all terms and conditions</span>
                </div>

                <div>
                    <button className="contact-contents-btn">
                        Get in touch &nbsp;
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact