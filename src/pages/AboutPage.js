import React from 'react';
import ReactDOM from 'react-dom'
import Hero from '../components/Hero';
import Content from '../components/Content';
import read_details from '../utils/read_details';

class AboutPage extends React.Component  {

    
    makeContent = (items) => {
        return items.map(item => {
            return <p>{item}</p>
        })
    }
    componentDidMount() {
        ReactDOM.findDOMNode(this).scrollIntoView();
      }
    
    render(){
        let contentDetails = read_details();
        return(
            <div>
                <Hero title={this.props.title} />
                <Content>
                    {this.makeContent(contentDetails.about)}
                </Content>
            </div>
        );
    }

}

export default AboutPage;