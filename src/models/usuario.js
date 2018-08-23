import axios from 'axios';
import ServerConfig from '../config/server_config';

class Usuario{

  async read(){
    var res;
    var serverConfig = new ServerConfig();
    return new Promise((resolve, reject) => {
      axios.get(serverConfig.serverAddress + 'usuario')
      .then(response => {
        if(response.data)
          resolve(res = {state: true, data: response.data});
        resolve(res = {state: false, data: null});
      });
    });
  }

  async login(nombre_usuario, password){
    var res;
    var serverConfig = new ServerConfig();
    return new Promise((resolve, reject) => {
      axios.post(serverConfig.serverAddress + 'login', {
        nombre_usuario: nombre_usuario,
        password: password
      })
      .then(response => {
        if(response.data)
          resolve(res = {state: true, data: response.data});
        resolve(res = {state: false, data: null});
      });
    });
  }
}

export default Usuario;
