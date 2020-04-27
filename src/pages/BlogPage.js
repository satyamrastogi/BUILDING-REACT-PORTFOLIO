import React from 'react';

import Hero from '../components/Hero';
import CardList from '../components/blog/CardList';

class BlogPage extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
      }
    render(){
        console.log(this.props.items);
        return(
            <div>
                <Hero title={this.props.title} />
                <CardList data={this.props.items}/>
            </div>
        );
    }
    

}

export default BlogPage;