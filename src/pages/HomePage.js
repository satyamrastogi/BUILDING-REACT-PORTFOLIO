import React from 'react';

import Hero from '../components/Hero';
import self from '../assets/images/self.jpg'
import '../css/homePage.css'

class HomePage extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
      }
      
    render(){
        return(
            <div  style={{marginTop:"1rem",marginBottom:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} />
                <div className="container text-left card " style={{padding:"3rem"}}>
                    <div className="row">
                    <div className="col-12 col-lg-6 hidden justify-content-center">
						<div style={{margin:"2rem"}}>
                        <img
                            className="image-fluid"
							src={self}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 60 + "%",
                                width: 50 + "%",
                                marginLeft:"5%"
							}}
						/>
                        </div>
					</div>
                    <div className=
							"col-12 col-sm-12 col-md-12 col-lg-6 ">
                        <h1 className="textSpacing">Upcoming Events</h1>
                        <h3 className="textSpacing">Party planner App</h3>
                        <h3 className="textSpacing">And</h3>
                        <h3 className="textSpacing">How to contribute to open source project</h3>
                    </div>

                    </div>
                    
                </div>
                {/* <div>
                    <img alt = "MyImage" style={{maxHeight:"40rem",maxWidth:"auto"}} src={self} className="cropped imagePosition"/>
                    <p>Party Planner </p>
                    <p>How to contribute online</p>                    
                </div> */}
            </div>
        );
    }
    

}

export default HomePage;