import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import PageTitle from '../../Components/PageTitle'
import BlogContents from '../../Components/BlogContents'

function Blog(){

    const value = useContext(ThemeContext)

    return(
        <div className={`blog ${value.wrapperTheme}`}>
            <div className="blog-container">
                <PageTitle title="WHAT'S NEWS?" childTitle="BLOG"/>
                <BlogContents />
            </div>
        </div>
    )
}

export default Blog