import React from 'react';

import Hero from '../components/Hero';
import CardList from '../components/blog/CardList';
import SubscriptionForm from '../components/ SubscriptionForm';
import FilterTopic from '../components/blog/FilterTopics';


class BlogPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            cardsList : props.items,
            originalCardsList : props.items
        }
    }

    filterChangeHandler= (filterDetails) => {
        let newState = [];
        this.state.originalCardsList.filter((value) =>{
            filterDetails.forEach(element => {
                if(value.category === element){
                    newState.push(value);
                }
                return element;
            });
            return value;
        });
        console.log({newState});
        this.setState({
            cardsList : newState
        });
    }
    
    getFilterTopic(){
        const data = this.state.originalCardsList.map(value => value.category );
        const unique = [...new Set(data)];
        return unique;
    }
    componentDidMount() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
      }
    render(){
        return(
            <div className="p-1" style={{marginTop:"1rem",marginBottom:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
                <Hero title={this.props.title} />
                <div className="row ">
                    <div className="col-md-auto">
                        <CardList data={this.state.cardsList}/>
                    </div>
                    <div className="col justify-content-md-center" style={{marginTop:"1rem",marginBottom:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
                        <div className="card" style={{padding:"1rem"}}>
                        <h4 className="display-5" style={{marginBottom:"1rem"}}>News Letter</h4>
                        <SubscriptionForm/>
                        </div>
                        <div className="card" style={{padding:"1rem",fontSize:"1vw",marginTop:"12rem" }}>
                        <h4 className="display-5" style={{marginBottom:"1rem"}}>Topics</h4>
                        <FilterTopic name={this.getFilterTopic()} onTask={(value)=>this.filterChangeHandler(value)}/>
                        </div>
                    </div>
                </div>
            </div>

            
        );
    }
    

}

export default BlogPage;