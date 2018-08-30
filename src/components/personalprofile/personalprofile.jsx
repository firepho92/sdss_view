import React, { Component } from 'react';
import BackArrow from '../backarrow/backarrow';
import Logout from '../logout/logout';
import MinimizedPersonalProfile from '../minimizedpersonalprofile/minimizedpersonalprofile';
import PersonalTable from '../personaltable/personaltable';

class PersonalProfile extends Component{

  handleFileUpdate(){

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
                <PersonalTable user = {this.props.user} updateLoggedUser = {this.props.updateLoggedUser}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;
