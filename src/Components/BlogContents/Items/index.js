import { useContext } from 'react'

import { ThemeContext } from '../../../ThemeContext'

function Item(props){

    const value = useContext(ThemeContext)

    return (
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 blog-col">
            <div className="blog-col-container">
                <div className="blog-col-container-title">
                    <img src={props.item.contentsImg}/>
                </div>

                <div className={`blog-col-container-description ${value.blogDesTheme}`}>
                    <div className="blog-col-container-description-top">
                        {props.item.contentsTitle}
                    </div>

                    <div>
                        {props.item.contentsDescription}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item