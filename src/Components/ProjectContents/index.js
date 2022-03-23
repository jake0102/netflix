import Col from './Col'

function ProjectContents(props){

    return (
        <div className="project-contents mt-4">
            <div className="row project-contents-row">
                {props.contentsItems.map((item, index) => (
                    <Col key={index} title={item.title} colors={item.colors} imgSrc={item.imgSrc}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectContents