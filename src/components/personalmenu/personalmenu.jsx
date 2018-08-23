import React, { Component } from 'react';
import './personalmenu.css';

class PersonalMenu extends Component{
  render(){
    return (
      <div className="personal-menu" onClick={e => this.props.handleSelfProfile()}>
        {this.props.user.nombre}
      </div>
    );
  }
}

export default PersonalMenu;
