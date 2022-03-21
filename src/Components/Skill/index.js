import Col from './Col'

function Skill(){
    return (
        <div className="skill">
            <div className="skill-top">
                MY SKILLS
            </div>
            <div className="skill-top-real">
                MY SKILLS
            </div>

            <div className="skill-bot">
                <div className="row">
                    <Col per='90' title='HTML'/>

                    <Col per='85' title='CSS'/>

                    <Col per='95' title='JAVASCRIPT'/>

                    <Col per='70' title='REACT'/>
                </div>

                <div className="row">
                    <Col per='65' title='PYTHON'/>

                    <Col per='45' title='JAVA'/>

                    <Col per='50' title='VUE'/>

                    <Col per='60' title='PHP'/>
                </div>

                <div className="row">
                    <Col per='70' title='MY SQL'/>

                    <Col per='33' title='LARAVEL'/>

                    <Col per='45' title='NODE'/>

                    <Col per='20' title='C'/>
                </div>
            </div>
        </div>
    )
}

export default Skill