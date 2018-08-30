import React, { Component } from 'react';
import UpdateFile from '../updatefile/updatefile';
import Moment from 'react-moment';
import 'moment/locale/es';
import 'moment-timezone';

class PersonalTable extends Component{
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
      <div className="col-xl-9 table-wrapper">
        <table className="table table-dark table-borderless table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Creado</th>
              <th>Actualizado</th>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {this.props.user.multimedia.map(file => {
              return (
                <tr key={file._id}>
                  <td onClick={e => this.handleClick(file)} className="file-cursor-pointer"><img style={{height: 30 + 'px'}} src={'http://localhost:8000/assets/icons/' + file.nombre_archivo.split('.').pop() + '.svg'} alt=""/></td>
                  <td onClick={e => this.handleClick(file)} className="file-cursor-pointer">{file.nombre_multimedia}</td>
                  <td onClick={e => this.handleClick(file)} className="file-cursor-pointer"><Moment format="DD/MM/YYYY">{file.creado}</Moment></td>
                  <td onClick={e => this.handleClick(file)} className="file-cursor-pointer">{file.actualizado !== null ? <Moment format="DD/MM/YYYY">{file.actualizado}</Moment>: null}</td>
                  <td><UpdateFile usuario={this.props.user} id={file._id} updateLoggedUser = {this.props.updateLoggedUser}/></td>
                  <td><button type="button" className="btn btn-outline-danger">Eliminar</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PersonalTable;
