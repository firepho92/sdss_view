import React, { Component } from 'react';
import './uploadfile.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Multimedia from '../../models/multimedia';

class UploadFile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      modal: false
    };
    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }

  handleSubmit(e){
    e.preventDefault();
    var multimedia = new Multimedia();
    multimedia.create(this.props.id, this.nombre_archivo.value, this.state.file)
    .then(response => {
      if(response.data.state){
        console.log(response);
        this.props.updateLoggedUser(this.props.id);
        this.setState({modal: false});
      }else{
        console.log('error');
      }
    });
  }

  render(){
    return (
      <div>
        <button className="btn btn-secondary" onClick={this.toggle}>Agregar archivo</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-form">
          <ModalHeader toggle={this.toggle}>Subir archivo</ModalHeader>
          <form action="/multimedia" encType="multipart/form-data" onSubmit={e => this.handleSubmit(e)}>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="nombre_archivo">Nombre de archivo</label>
                <input type="text" id="nombre_archivo" className="form-control" aria-describedby="nombreHelp" placeholder="Nombre de archivo" ref = {(input) => this.nombre_archivo = input} autoComplete="off" />
              </div>
              <input type="file" name="file" onChange={this.onChange}/>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">Subir</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default UploadFile;
