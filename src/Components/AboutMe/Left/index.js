import modelImg from './model.jpeg'

function Left(){
    return(
        <div className="home-aboutMe-left">
             <div className="home-aboutMe-left-container">
                <img src={modelImg} className="home-aboutMe-left-container-img" />
            </div>
        </div>
    )
}

export default Left