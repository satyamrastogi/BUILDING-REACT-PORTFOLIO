import React from 'react';

import Cards from './Cards';


class CardList extends React.Component {

    makeCardList = (items) => {
        return items.map(item => {
            return <Cards key={item.id} item={item}></Cards>
        })
    }
   render(){
       return <div className="card-deck justify-content-md-center" style={{marginTop:"1rem",marginBottom:"1rem",marginLeft:"1rem",marginRight:"1rem",maxWidth:900}}>
       {this.makeCardList(this.props.data)}
       </div>;
   }

}

export default CardList;