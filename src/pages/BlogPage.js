import React from 'react';

import Hero from '../components/Hero';
import CardList from '../components/blog/CardList';
import SubscriptionForm from '../components/ SubscriptionForm';


class BlogPage extends React.Component {
    
    componentDidMount() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
      }
    render(){
        return(
            <div className="p-1" style={{backgroundColor:"red",marginTop:"1rem",marginBottom:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
                <Hero title={this.props.title} />
                <div className="row ">
                    <div className="col-md-auto">
                        <CardList data={this.props.items}/>
                    </div>
                    <div className="col justify-content-md-center" style={{marginTop:"1rem",marginBottom:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
                    <SubscriptionForm/>
                    </div>
                </div>
            </div>

            
        );
    }
    

}

export default BlogPage;