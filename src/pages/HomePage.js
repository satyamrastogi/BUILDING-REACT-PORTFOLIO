import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

class HomePage extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
      }
      
    render(){
        return(
            <div className="p-1" style={{marginTop:"1rem",marginBottom:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} />
                <Carousel />
            </div>
        );
    }
    

}

export default HomePage;