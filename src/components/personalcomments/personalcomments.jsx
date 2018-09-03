import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/es';
import 'moment-timezone';
import Fade from 'react-reveal/Fade';

class PersonalComments extends Component{
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }
  componentDidMount(){
    this.setState({
      show: true
    })
  }
  render(){
    return (
      <Fade cascade bottom when={this.state.show}>
        <div className="row comments">
          <div className="col-1 cursor-default"><img alt="avatar" className="comments-avatar" src={'http://localhost:8000/assets/' + this.props.comentario.usuario.imagen_perfil} style={{height: 30 + 'px'}}/></div>
          <div className="col-2 cursor-default">{this.props.comentario.usuario.nombre} <Moment format="DD/MM/YYYY">{this.props.comentario.fecha}</Moment></div>
          <div className="col-8 comment cursor-default">{this.props.comentario.comentario}</div>
          <div className="col-1 cursor-pointer">x</div>
        </div>
      </Fade>
    );
  }
}

export default PersonalComments;
