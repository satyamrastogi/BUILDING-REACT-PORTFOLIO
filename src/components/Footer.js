import React from 'react';
import Icon from './Icon'
import Link from './Link';

class Footer extends React.Component{

    makeList = (items) => {
        return items.map((item,index) => {
        return <li className="list-unstyled" key={index}><Icon iconName={item.icon_name}/><Link style={{color:"#DEE2E6"}} to={item.path}>{item.title}</Link></li>
        });
    }
    
    render(){
        let userDetail =  this.props.userDetail;
        
        return (
            <footer  className="font-small pt-4 mt-4 pl-2 " style={{backgroundColor:"#343A40", color:"#FFFFFF" }}>
              <div fluid="true" className="text-md-left">
                <div className="row">
                  <div className="col-sm" style={{ marginRight:"3%"}}>
                    <h5 className="title">Footer Content</h5>
                    <p>
                      {userDetail.footer_content}
                    </p>
                  </div>
                  <div className="col-sm" style={{ marginRight:"3%"}}>
                    <h5 className="title">General</h5>
                    <ul >
                      {this.makeList(userDetail.tab)}
                    </ul>
                  </div>
                  <div className="col-sm" style={{ marginRight:"3%"}}>
                    <h5 className="title">Follow me</h5>
                    <ul>
                      {this.makeList(userDetail.follow_us)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright text-center py-3">
                <div fluid="true">
                  Copyright: {userDetail.userName} &copy; {new Date().getFullYear()}  
                </div>
              </div>
            </footer>
          );
    }
}

export default Footer;