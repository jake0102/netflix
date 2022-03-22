import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import img1 from './list.png'

function Item(props){
    return (
        <div className="favorite-container mb-5">
            <div className="favorite-container-tilte">
                <span style={{color: props.data.color}} >{props.data.title}</span>
                <FontAwesomeIcon icon={props.data.icon} style={{marginLeft: '1rem', color: props.data.color}}/>
            </div>
                
            <div className="favorite-container-content mt-3">
                <ul>
                    {props.data.content.map((item, index) => (
                        <li><img src={img1} className="me-3" key={index}/>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Item