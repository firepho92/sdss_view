import React, { Component } from 'react';
import PersonalComments from '../personalcomments/personalcomments';

class PersonalFileComments extends Component{

  handleSubmit(e){

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
          <div className="comments-wrapper">
            {this.props.file.comentarios.map(comentario => {
              return (<PersonalComments key = {i++} comentario = {comentario}/>);
            })}
          </div>

        </div>
      </div>
    );
  }
}

export default PersonalFileComments;
