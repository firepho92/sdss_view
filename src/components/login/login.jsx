import React, { Component } from 'react';
import Usuario from '../../models/usuario';
import './login.css';

class Login extends Component{

  handleSubmit(e){
    var self = this;
    e.preventDefault();
    var usuario = new Usuario();
    usuario.login(this.nombre_usuario.value, this.password.value)
    .then(response => {
      if(response.data.state)
        self.props.handleLogin(response.data.data);
    });
  }

  render(){
    return(
      <div className="container login-container">
        <div className="row align-items-center login-row">
          <div className="col align-self-center login-col">
            <h2>Inicio de sesión</h2>
            <form onSubmit = {e => {this.handleSubmit(e)}}>
              <div className="form-group">
                <label htmlFor="nombre_usuario">Nombre de usuario</label>
                <input type="text" className="form-control text-input" id="nombre_usuario" aria-describedby="nombreHelp" placeholder="Nombre de usuario" ref = {(input) => this.nombre_usuario = input} />
                <small id="emailHelp" className="form-text text-muted">Nunca compartas tu usuario ni contraseña.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control text-input" id="exampleInputPassword1" placeholder="Contraseña" ref = {(input) => this.password = input} />
              </div>
              <button type="submit" className="btn btn-secondary">Enviar</button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
