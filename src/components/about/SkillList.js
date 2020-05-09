import React from 'react';
import SkillProgessBar from './SkillProgressBar'



class SkillList extends React.Component {

    makeSkillProgressBar = (items) => {
        return items.map(item => {
            return <SkillProgessBar key={item.id} item={item}></SkillProgessBar>
        })
    }
   render(){
       return <>
       {this.makeSkillProgressBar(this.props.data)}
       </>;
   }

}

export default SkillList;