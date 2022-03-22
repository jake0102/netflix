import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'

function Blog(){

    const value = useContext(ThemeContext)

    return(
        <div className={`blog ${value.wrapperTheme}`}>
            <div className="blog-container">
                <PageTitle title="WHAT'S NEWS?" childTitle="BLOG"/>
            </div>
        </div>
    )
}

export default Blog