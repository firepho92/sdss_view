import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Multimedia from '../../models/multimedia';

class UpdateFile extends Component{
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
    var nombre_multimedia = this.nombre_multimedia.value;
    var multimedia = new Multimedia();
    multimedia.update(this.props.usuario._id, this.props.id, this.state.file, nombre_multimedia)
    .then(response => {
      if(response.data.state){
        this.props.updateLoggedUser(this.props.usuario._id);
        this.setState({modal: false});
      }else{
        console.log('error');
      }
    });
  }

  render(){
    return (
      <div>
        <button className="btn btn-outline-primary" onClick={this.toggle}>Actualizar</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-form">
          <ModalHeader toggle={this.toggle}>Subir archivo</ModalHeader>
          <form action="/multimedia" encType="multipart/form-data" onSubmit={e => this.handleSubmit(e)}>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="nombre_archivo">Nombre de archivo</label>
                <input type="text" id="nombre_archivo" className="form-control" aria-describedby="nombreHelp" placeholder="Nombre de archivo" ref = {(input) => this.nombre_multimedia = input} autoComplete="off" />
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

export default UpdateFile;
