import React from 'react';

import Hero from '../components/Hero';
import CardList from '../components/blog/CardList';


class BlogPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            cardsList : props.items,
            originalCardsList : props.items
        }
    }


    // filterChangeHandler= (filterDetails) => {
    //     let newState = [];
    //     this.state.originalCardsList.filter((value) =>{
    //         filterDetails.forEach(element => {
    //             if(value.category === element){
    //                 newState.push(value);
    //             }
    //             return element;
    //         });
    //         return value;
    //     });
    //     this.setState({
    //         cardsList : newState
    //     });
    // }
    
    // getFilterTopic(){
    //     const data = this.state.originalCardsList.map(value => value.category );
    //     const unique = [...new Set(data)];
    //     return unique;
    // }
    componentDidMount() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
      }
    render(){
        return(
            <div style={{marginTop:"1rem",marginBottom:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
                <Hero title={this.props.title} />
                <CardList data={this.state.cardsList}/>
            </div>

            
        );
    }
    

}

export default BlogPage;