import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SnackBarButton from '../SnackBarButton';

class Cards extends React.Component {  

    copyUrlToCLipBoard = () => {
        var copyText = this.state.button.git_url;
        const el = document.createElement('textarea');
        el.value = copyText;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

    constructor(props){
        super(props);
        this.state={
          button : {
            title : 'share',
            text : 'Link is successfully copied to clipboard',
            name : 'Share',
            git_url : props.item.git_url
          }
            
        }
    }

    render(){
    return (
        <Card style={{maxWidth:340,margin:"3%"}}>
          <CardActionArea style={{ textDecoration : "none" }} href={this.props.item.git_url} target="_blank">
            <CardMedia
              component="img"
              alt={this.props.item.title}
              height="340rem"
              image={require(`../../assets/images/${this.props.item.image}`)}
              title={this.props.item.intro}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.item.intro}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <SnackBarButton button={this.state.button} onTask={this.copyUrlToCLipBoard}/>
            <Button href={this.props.item.git_url} target="_blank" size="small">Know More</Button>
            {/* <InfoPopUpButton title={this.props.item.title} content={this.props.item.content}/> */}
          </CardActions>
        </Card>
      );
  }
  
}

export default Cards;