import React, { Component } from 'react';
import UploadFile from '../uploadfile/uploadfile';

class MinimizedPersonalProfile extends Component{
  render(){
    return(
      <div className="col-xl-3 align-self-center">
        <div className="minimized-profile-wrapper">
          <div className="minimized-profile-title"><b>{this.props.user.nombre}</b></div>
          <br/>
          <UploadFile id={this.props.user._id} updateLoggedUser = {this.props.updateLoggedUser} />
          <br/>
          <div><img className="minimized-profile-avatar" src={'http://localhost:8000/assets/' + this.props.user.imagen_perfil} alt=""/></div>
        </div>
      </div>
    );
  }
}

export default MinimizedPersonalProfile;
