import React, { Component } from 'react';

class Logout extends Component{
  render(){
    return(
      <div className="personal-menu" onClick={this.props.logout}>Salir</div>
    );
  }
}

export default Logout;
