import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import InfoPopUpButton from '../InfoPopUpButton'
import SnackBarButton from '../SnackBarButton'

class Cards extends React.Component {  
    
    copyUrlToCLipBoard = () => {
        var copyText = window.location.href;
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
            title : 'share',
            text : 'Link is successfully copied to clipboard',
            name : 'Share',
            color : 'dark'
        }
    }

    render(){
    return (
        <Card style={{maxWidth:400,margin:"1rem"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={this.props.item.title}
              height="280rem"
              image={require('../../assets/images/devgrub.png')}
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
            <SnackBarButton button={this.state} onTask={this.copyUrlToCLipBoard}/>
            <InfoPopUpButton title={this.props.item.title} content={this.props.item.intro}/>
          </CardActions>
        </Card>
      );
  }
  
}

export default Cards;