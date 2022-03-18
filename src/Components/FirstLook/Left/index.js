import modelImg from './model.jpeg'

function Left(){
    return(
        <div className="home-firstlook-left">
             <div className="home-firstlook-left-container">
                <img src={modelImg} className="home-firstlook-left-container-img" />
            </div>
        </div>
    )
}

export default Left