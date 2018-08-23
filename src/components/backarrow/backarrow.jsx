import React, { Component } from 'react';
import './backarrow.css';

class BackArrow extends Component{

  handleClick(e){
    this.props.backHome();
  }

  render(){
    return(
      <button className="arrow left" onClick={e => this.handleClick(e)}>
        <svg width="30px" height="40px" viewBox="0 0 50 80" xmlSpace="preserve">
          <polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="
      	45.63,75.8 0.375,38.087 45.63,0.375 "/>
        </svg>
      </button>
    );
  }
}

export default BackArrow;
