import React, { Component } from 'react';

class Comments extends Component{
  render(){
    return (
      <div className="row comments">
        <div className="col-1"><img alt="avatar" className="comments-avatar" src={'http://localhost:8000/assets/' + this.props.comentario.usuario.imagen_perfil} style={{height: 30 + 'px'}}/></div>
        <div className="col-1">{this.props.comentario.usuario.nombre}</div>
        <div className="col-10 comment">{this.props.comentario.comentario}</div>
      </div>
    );
  }
}

export default Comments;
