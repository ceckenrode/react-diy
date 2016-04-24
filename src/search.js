import React, { Component } from 'react';
import {render} from 'react-dom';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: "React"
    }
  }
  handleChange(event){
    this.setState({searchTerm: event.target.value.subStr(0,50)})
  }
  render() {
    return (
      <div>
      Search Term: <input type="search"
      value={this.state.searchTerm}
      onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}
React.render(<Search />, document.body);
