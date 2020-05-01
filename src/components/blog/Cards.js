import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoPopUpButton from '../InfoPopUpButton'

class Cards extends React.Component {  
  
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
            <Button size="small" color="dark">
              Share
            </Button>
            <InfoPopUpButton title={this.props.item.title} content={this.props.item.intro}/>
          </CardActions>
        </Card>
      );
  }
  
}

export default Cards;