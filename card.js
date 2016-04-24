import React, { Component } from 'react';
import CheckList from './checklist';

class Card extends Component {
  render(){
    return (
      <div className="card">
        <div className="card_title">{this.props.title}</div>
        <div className="card_details">
          {this.props.description}
          <CheckList cardId={this.props.idea} tasks={this.props.tasks} />
         </div>
      </div>
    );
  }
}
export default Card;
