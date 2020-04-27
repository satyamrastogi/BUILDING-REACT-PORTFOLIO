import React from 'react';

import Cards from './Cards';


class CardList extends React.Component {

    makeCardList = (items) => {
        return items.map(item => {
            return <Cards item={item}></Cards>
        })
    }
   render(){
       return <div className="card-deck">{this.makeCardList(this.props.data)}</div>;
   }

}

export default CardList;