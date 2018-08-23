import React, { Component } from 'react';
import MinimizedProfile from '../minimizedprofile/minimizedprofile';
import BackArrow from '../backarrow/backarrow';
import './selecteduser.css';

class SelectedUser extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fileComments: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(file) {
    this.setState({ fileComments: file.comentarios });
  }

  render(){
    return (
      <div>
      <BackArrow backHome = {this.props.backHome} />
        <div className="container minimized-profile-container">
          <div className="row user-files">
            <div className="col-xl-3">
              <MinimizedProfile user = {this.props.user} handleUserSelection = {this.props.handleUserSelection} />
            </div>
            <div className="col-xl-9 table-wrapper">
              <table className="table table-dark table-borderless table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Enlace</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.user.multimedia.map(file => {
                    return (
                      <tr key={file._id}>
                        <td><img style={{height: 30 + 'px'}} src={'http://localhost:8000/assets/icons/' + file.nombre_archivo.split('.').pop() + '.svg'} alt=""/></td>
                        <td onClick={e => this.handleClick(file)}>{file.nombre_multimedia}</td>
                        <td className="table-link"><a href={'http://localhost:8000/uploads/' + file.nombre_archivo}>Descargar</a></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <br/>
          <div className="row file-comments">
            {this.state.fileComments !== null ? 'show comments' : null}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedUser;
