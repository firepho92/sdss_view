import React, { Component } from 'react';
import axios from 'axios';
import Token from './token.js';
import Login from './components/login/login';
import Documents from './components/documents/documents';
import ServerConfig from './config/server_config';
import PersonalMenu from './components/personalmenu/personalmenu';
import SelectedUser from './components/selecteduser/selecteduser';
import PersonalProfile from './components/personalprofile/personalprofile';
import Usuario from './models/usuario';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      permission: false,
      user: null,
      users: [],
      gui: 0,
      selectedUser: null,
      error: null
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleUserSelection = this.handleUserSelection.bind(this);
    this.handleSelfProfile = this.handleSelfProfile.bind(this);
    this.backHome = this.backHome.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount(){
    var serverConfig = new ServerConfig();
    var token = new Token();
    var self = this;
    axios.post(serverConfig.serverAddress, {token: token.token})
    .then(response => {
      if(response.data){
        self.setState({
          permission: response.data,
          gui: 1
        });
        if(this.props.id !== null){
          axios.get(serverConfig.serverAddress + 'usuario/byID/?id=' + this.props.id)
          .then(response => {
            if(response.data.state){
              self.setState({
                user: response.data.data,
                gui: 2
              });
            }
          });
        }
      }else{
        self.setState({
          gui: 0
        });
      }
    });
  }

  handleLogin(user){
    sessionStorage.setItem('id', user._id);
    this.setState({
      user: user,
      gui: 2
    });
  }

  handleLogout(){
    sessionStorage.removeItem('id');
    this.setState({
      user: null,
      gui: 1
    });
  }

  getUsers(){
    var self = this;
    var usuario = new Usuario();
    usuario.read()
    .then(response => {
      if(response.data.state){
        self.setState({
          users: response.data.data
        });
      }else{
        self.setState({
          error: 'Oops ha habido un error, intenta de nuevo'
        });
      }
    });
  }

  handleUserSelection(user){
    this.setState({
      selectedUser: user,
      gui: 3
    });
  }

  handleSelfProfile(){
    this.setState({
      gui: 4
    });
  }

  backHome(){
    this.setState({
      gui: 2
    });
  }

  render() {
    return (
      <div className="App">
        { this.state.gui === 0 ? 'not allowed' : null }
        { this.state.permission && this.state.gui === 1 ? <Login handleLogin = {this.handleLogin} /> : null }
        { this.state.user !== null && this.state.gui === 2 ? <Documents handleSelfProfile = {this.handleSelfProfile} getUsers = {this.getUsers} users = {this.state.users} user = {this.state.user} handleUserSelection = {this.handleUserSelection} /> : null }
        { this.state.selectedUser !== null && this.state.gui === 3 ? <SelectedUser user = {this.state.selectedUser} backHome = {this.backHome} /> : null }
        { this.state.personalProfile !== null && this.state.gui === 4 ? <PersonalProfile user = {this.state.user} backHome = {this.backHome} logout = {this.handleLogout}/> : null }
      </div>
    );
  }
}

export default App;
