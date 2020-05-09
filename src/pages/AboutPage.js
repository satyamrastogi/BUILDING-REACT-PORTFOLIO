import React from 'react';
import Hero from '../components/Hero';
import youtube from '../assets/images/youtube.JPG'
import SkillList from '../components/about/SkillList';

class AboutPage extends React.Component  {

    
    makeContent = (items) => {
        return items.map((item,index) => {
            return <p key={index}>{item}</p>
        })
    }

    componentDidMount() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
      }

    render(){
        return(
            <div>
                <Hero title={this.props.title} />
                <div className="container text-left card " style={{padding:"3rem"}}>
                    <div className="row">
                    <div className="col-12 col-lg-6 hidden justify-content-center">
						<div style={{margin:"2rem"}}>
                        <img
                            className="image-fluid"
							src={youtube}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 50 + "%",
                                width: 50 + "%",
                                marginLeft:"20%"
							}}
						/>
                        </div>
					</div>
                    <div className=
							"col-12 col-sm-12 col-md-12 col-lg-6 ">
                        {this.makeContent(this.props.about)}
                    </div>

                    </div>
                    
                </div>
                <div className="container" style={{padding:"2rem" ,marginTop:"10%"}}>
                <div className="row justify-content-center" >
					<div
						className=
							"col-12 col-sm-12 col-md-12 col-lg-6 " style={{marginTop:"5%"}}
						>
                        <h1 className="text-center">Skill Set</h1>
						<div style={{marginTop:"7%"}}>
                        <SkillList data={this.props.skills} />
                        </div>
					</div>
				</div>
                </div>
            </div>
        );
    }

}

export default AboutPage;