import React, { Component } from 'react';
import BackArrow from '../backarrow/backarrow';
import Logout from '../logout/logout';
import MinimizedPersonalProfile from '../minimizedpersonalprofile/minimizedpersonalprofile';
import PersonalTable from '../personaltable/personaltable';
import PersonalFileComments from '../personalfilecomments/personalfilecomments';

class PersonalProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(file) {
    this.setState({ file: file });
  }

  render(){
    return (
      <div>
        <BackArrow backHome = {this.props.backHome}/>
        <Logout logout = {this.props.logout} />
        <div className="container minimized-profile-container">
          <div className="row align-items-center">
            <div className="col align-self-center login-col">
              <div className="minimized-profiles-wrapper row">
                <MinimizedPersonalProfile user = {this.props.user} updateLoggedUser = {this.props.updateLoggedUser}/>
                <PersonalTable user = {this.props.user} updateLoggedUser = {this.props.updateLoggedUser} handleClick = {this.handleClick}/>
              </div>
            </div>
          </div>
          <br/>
          {this.state.file !== null ? <PersonalFileComments handleClick = {this.handleClick} file = {this.state.file} /> : null}
        </div>
      </div>
    );
  }
}

export default PersonalProfile;
