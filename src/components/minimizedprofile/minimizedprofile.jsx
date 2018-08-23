import React, { Component } from 'react';
import './minimizedprofile.css';
import Moment from 'react-moment';
import 'moment/locale/es';
import 'moment-timezone';

class MinimizedProfile extends Component{
  render(){
    return (
      <div className="col-xl-3 align-self-center">
        <div className="minimized-profile-wrapper" onClick={e => this.props.handleUserSelection(this.props.user)}>
          <div className="minimized-profile-title"><b>{this.props.user.nombre}</b></div>
          <br/>
          <div className="minimized-profile-files-count">{this.props.user.multimedia.length} archivos</div>
          <div className="minimized-profile-last-connection text-muted"><Moment locale = 'es' fromNow>{this.props.user.ultima_conexion}</Moment></div>
          <br/>
          <div><img className="minimized-profile-avatar" src={'http://localhost:8000/assets/' + this.props.user.imagen_perfil} alt=""/></div>
        </div>
      </div>
    );
  }
}

export default MinimizedProfile;
