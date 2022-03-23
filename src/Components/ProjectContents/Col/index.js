function Col(props){
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 project-contents-col">
            <span style={{ color: `${props.colors}` }}>{props.title}</span>
        </div>
    )
}

export default Col