import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from './Icon'
import { Link } from 'react-router-dom';

class Footer extends React.Component{

    makeList = (items) => {
        return items.map(item => {
        return <li className="list-unstyled p-1" ><Icon iconName={item.icon_name}/><Link style={{color:"#DEE2E6"}} to={item.path}>{item.title}</Link></li>
        });
    }

    render(){
        let userDetail =  this.props.userDetail;
        
        return (
            <footer  className="font-small pt-4 mt-4" style={{backgroundColor:"#343A40", color:"#FFFFFF"}}>
              <Container fluid className="text-center text-md-left">
                <Row>
                  <Col md="4">
                    <h5 className="title">Footer Content</h5>
                    <p>
                      {userDetail.footer_content}
                    </p>
                  </Col>
                  <Col md="4">
                    <h5 className="title">General</h5>
                    <ul>
                      {this.makeList(userDetail.tab)}
                    </ul>
                  </Col>
                  <Col md="4">
                    <h5 className="title">Follow me</h5>
                    <ul>
                      {this.makeList(userDetail.follow_us)}
                    </ul>
                  </Col>
                </Row>
              </Container>
              <div className="footer-copyright text-center py-3">
                <Container fluid>
                  Copyright: {userDetail.userName} &copy; {new Date().getFullYear()}  
                </Container>
              </div>
            </footer>
          );
    }
}

export default Footer;