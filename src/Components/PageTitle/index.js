function PageTitle(props){
    return (
        <>
            <div className="pageTitle-top">
                {props.title}
            </div>
            <div className="pageTitle-top-real">
                {props.childTitle}
            </div>
        </>
    )
}

export default PageTitle