import React, { Component } from 'react';
import './filecomments.css';
import Multimedia from '../../models/multimedia';
import Comments from '../comments/comments';

class FileComments extends Component{

  handleSubmit(e){
    var multimedia = new Multimedia();
    e.preventDefault();
    var selectedUser = this.props.selectedUser;
    var comment = {
      usuario: {
        _id: this.props.user._id,
        nombre: this.props.user.nombre,
        imagen_perfil: this.props.user.imagen_perfil
      },
      comentario: this.comentario.value,
      fecha: new Date()
    }
    selectedUser.multimedia.map(file => {
      if(file._id == this.props.file._id)
        file.comentarios.push(comment);
    });
    multimedia.addComments(selectedUser)
    .then(response => {
      if(response.data.state){
        this.props.updateSelectedUser(selectedUser._id);
        this.comentario.value = '';
      }else{
        console.log('error');
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    var i = 0;
    return(
      <div className="row file-comments">
        <div className="col-xl-12">
          <div className="row justify-content-center">
            <div className="col-4">Comentarios</div>
          </div>
          <br/>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="row add-comment">
              <div className="col-1"><img alt="avatar" className="comments-avatar" src={'http://localhost:8000/assets/' + this.props.user.imagen_perfil} style={{height: 30 + 'px'}}/></div>
              <div className="col-10">
                <input type="text" className="form-control text-input" id="comentario" placeholder="Comentario" ref = {(input) => this.comentario = input} autoComplete="off"/>
              </div>
              <div className="col-1"><button type="submit" className="btn btn-secondary">Enviar</button></div>
            </div>
          </form>
          <br/>
          {this.props.file.comentarios.map(comentario => {
            return (<Comments key = {i++} comentario = {comentario}/>);
          })}
        </div>
      </div>
    );
  }
}

export default FileComments;
