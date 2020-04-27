import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookIcon from '@material-ui/icons/Book';
import InfoIcon from '@material-ui/icons/Info';
import MailIcon from '@material-ui/icons/Mail';



class Icon extends React.Component {
    render(){
        switch(this.props.iconName){
            case "Facebook":
                return <FacebookIcon/>;
            case "GitHub":
                return<GitHubIcon/>;
            case "Home":
                return <HomeIcon/>;
            case "Twitter":
                return <TwitterIcon/>;
            case "LinkedIn":
                return <LinkedInIcon/>;
            case "Book":
                return <BookIcon/>;
            case "Info":
                return <InfoIcon/>;
            case "Mail":
                return <MailIcon/>;
            default:
                return <p>nothing found</p>;
        }
    }
    

}


export default Icon;