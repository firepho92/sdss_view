import axios from 'axios';
import ServerConfig from '../config/server_config';

class Multimedia{

  async read(){
    //not implemented yet
  }

  async create(id, nombre_multimedia, file){
    var serverConfig = new ServerConfig();
    var formData = new FormData();
    formData.append('id', id);
    formData.append('nombre_multimedia', nombre_multimedia);
    formData.append('file', file);
    return new Promise((resolve, reject) => {
      axios.post(serverConfig.serverAddress + 'multimedia', formData, {headers: {'content-type': 'multipart/form-data'}, onUploadProgress: (progressEvent) => {var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );}})
      .then(response => {
        resolve(response);
      });
    });
  }

  async update(user_id, file_id, file, multimedia_name){
    var res;
    var formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('file_id', file_id);
    formData.append('file', file);
    formData.append('multimedia_name', multimedia_name);
    var serverConfig = new ServerConfig();
    return new Promise((resolve, reject) => {
      axios.put(serverConfig.serverAddress + 'multimedia', formData, {headers: {'Content-Type': 'multipart/form-data'}, onUploadProgress: (progressEvent) => {var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )}})
      .then(response => {
        resolve(response);
      });
    });
  }

  async addComments(selectedUser){
    var res;
    var serverConfig = new ServerConfig();
    return new Promise((resolve, reject) => {
      axios.put(serverConfig.serverAddress + 'usuario', {usuario: selectedUser})
      .then(response => {
        resolve(response);
      });
    });
  }
}

export default Multimedia;
