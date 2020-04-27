import React from 'react';

import Cards from './Cards';
import Container from 'react-bootstrap'

class CardList extends React.Component {

    makeCardList = (items) => {
        return items.map(item => {
            return <Cards item={item}></Cards>
        })
    }
   render(){
       return <Container className="card-deck">{this.makeCardList(this.props.data)}</Container>;
   }

}

export default CardList;