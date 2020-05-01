import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import SubscriptionForm from '../components/ SubscriptionForm'

class ContactPage extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
      }

    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <SubscriptionForm/>
                </Content>
            </div>
        );
    }

}

export default ContactPage;