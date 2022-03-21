import { useContext } from 'react'

import { ThemeContext } from '../../../ThemeContext'

function Col(props){

    const value = useContext(ThemeContext)

    return (
        <div className="col">
            <div>
                <div className={`c100 p${props.per} mb-4 ${value.colTheme}`}>
                    <span>{props.per}%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
        
                <div className="skill-bot-row-title">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default Col