import React, { Component } from 'react';
import MinimizedProfile from '../minimizedprofile/minimizedprofile';
import BackArrow from '../backarrow/backarrow';
import FileComments from '../filecomments/filecomments';
import './selecteduser.css';
import Moment from 'react-moment';
import 'moment/locale/es';
import 'moment-timezone';

class SelectedUser extends Component{
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(file) {
    this.setState({ file: file });
  }

  render(){
    return (
      <div>
      <BackArrow backHome = {this.props.backHome} />
        <div className="container minimized-profile-container">
          <div className="row user-files">
            <div className="col-xl-3">
              <MinimizedProfile user = {this.props.selectedUser} handleUserSelection = {this.props.handleUserSelection} />
            </div>
            <div className="col-xl-9 table-wrapper">
              <table className="table table-dark table-borderless table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Creado</th>
                    <th>Actualizado</th>
                    <th>Enlace</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.selectedUser.multimedia.map(file => {
                    return (
                      <tr key={file._id}>
                        <td onClick={e => this.handleClick(file)} className="file-cursor-pointer"><img style={{height: 30 + 'px'}} src={'http://localhost:8000/assets/icons/' + file.nombre_archivo.split('.').pop() + '.svg'} alt="icon"/></td>
                        <td onClick={e => this.handleClick(file)} className="file-cursor-pointer">{file.nombre_multimedia}</td>
                        <td onClick={e => this.handleClick(file)} className="file-cursor-pointer"><Moment format="DD/MM/YYYY">{file.creado}</Moment></td>
                        <td onClick={e => this.handleClick(file)} className="file-cursor-pointer">{file.actualizado !== null ? <Moment format="DD/MM/YYYY">{file.actualizado}</Moment> : null}</td>
                        <td className="table-link"><a href={'http://localhost:8000/uploads/' + file.nombre_archivo}>Descargar</a></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <br/>
          {this.state.file !== null ? <FileComments file = {this.state.file} user = {this.props.user} selectedUser = {this.props.selectedUser} updateSelectedUser = {this.props.updateSelectedUser}/> : null}
        </div>
      </div>
    );
  }
}

export default SelectedUser;
