import React from 'react';


class SkillProgressBar extends React.Component {

   
   render(){
       return <div className="progress mb-3">
       <div
           className="progress-bar"
           role="progressbar"
           style={{ width: this.props.item.mastery  + "%" }}
           aria-valuemin="0"
           aria-valuemax="100">
           {this.props.item.name}
       </div>
   </div>;
   }

}

export default SkillProgressBar;