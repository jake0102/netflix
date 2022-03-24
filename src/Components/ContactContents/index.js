import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import img from './background.jpeg'

function Contact(){
    return (
        <div className="contact-contents">

            <img src={img} />

            <div style={{zIndex: '2'}}>
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
                        <span>and something's wrong with</span>
                        <select>
                            <option defaultValue>&nbsp;</option>
                            <option value="Home">Home</option>
                            <option value="Project">Project</option>
                            <option value="Blog">Blog</option>
                            <option value="Contact">Contact</option>
                            <option value="About">About</option>
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