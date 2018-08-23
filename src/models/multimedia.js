import axios from 'axios';
import ServerConfig from '../config/server_config';

class Multimedia{

  async read(){
    //not implemented yet
  }

  async create(id, nombre_multimedia, file){
    var serverConfig = new ServerConfig();
    var formData = new FormData();
    var config = {
      headers: {
        'content-type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
      }
    };
    formData.append('id', id);
    formData.append('nombre_multimedia', nombre_multimedia);
    formData.append('file', file);
    return new Promise((resolve, reject) => {
      axios.post(serverConfig.serverAddress + 'multimedia', formData, {headers: {'content-type': 'multipart/form-data'}})
      .then(response => {
        console.log(response.data);
      });
    });
  }

}

export default Multimedia;
