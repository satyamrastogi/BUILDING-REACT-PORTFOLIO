import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

class AboutPage extends React.Component  {

    
    makeContent = (items) => {
        return items.map(item => {
            return <p>{item}</p>
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
                <Content>
                    {this.makeContent(this.props.about)}
                </Content>
            </div>
        );
    }

}

export default AboutPage;