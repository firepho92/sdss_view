import React, { Component } from 'react';
import BackArrow from '../backarrow/backarrow';
import UploadFile from '../uploadfile/uploadfile';
import Logout from '../logout/logout';

class PersonalProfile extends Component{

  handleFileUpdate(){

  }

  render(){
    return (
      <div>
        <BackArrow backHome = {this.props.backHome}/>
        <Logout logout = {this.props.logout} />
        <div className="container minimized-profile-container">
          <div className="row align-items-center">
            <div className="col align-self-center login-col">
              <div className="minimized-profiles-wrapper row">
                <div className="col-xl-3 align-self-center">
                  <div className="minimized-profile-wrapper">
                    <input className="form-control text-input" defaultValue={this.props.user.nombre} ref = {(input) => this.nombre = input}/>
                    <br/>
                    <UploadFile id={this.props.user._id} />
                    <br/>
                    <div><img className="minimized-profile-avatar" src={'http://localhost:8000/assets/' + this.props.user.imagen_perfil} alt=""/></div>
                  </div>
                </div>
                <div className="col-xl-9 table-wrapper">
                  <table className="table table-dark table-borderless table-hover">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Actualizar</th>
                        <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.user.multimedia.map(file => {
                        return (
                          <tr key={file._id}>
                            <td><img style={{height: 30 + 'px'}} src={'http://localhost:8000/assets/icons/' + file.nombre_archivo.split('.').pop() + '.svg'} alt=""/></td>
                            <td>{file.nombre_multimedia}</td>
                            <td><button type="button" className="btn btn-primary">Actualizar</button></td>
                            <td><button type="button" className="btn btn-danger">Eliminar</button></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;
