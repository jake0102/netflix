function Col(props){
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 project-contents-col">
            <a href={props.link} target='_blank'><span style={{ color: `${props.colors}` }}>{props.title}</span>
            <img src={props.imgSrc}/></a>
        </div>
    )
}

export default Col