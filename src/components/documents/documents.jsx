import React, { Component } from 'react';
import MinimizedProfile from '../minimizedprofile/minimizedprofile';
import PersonalMenu from '../personalmenu/personalmenu';
//import Loading from '../loading/loading';
import './documents.css';

class Documents extends Component{

  componentDidMount(){
    this.props.getUsers();
  }

  render(){
    return (
      <div>
        <PersonalMenu user = {this.props.user} handleSelfProfile = {this.props.handleSelfProfile} />
        <div className="container minimized-profile-container">
          <div className="row align-items-center">
            <div className="col align-self-center login-col">
              <div className="minimized-profiles-wrapper row">
                {this.props.users.map(user => {
                  return this.props.user._id !== user._id ? <MinimizedProfile user = {user} handleUserSelection = {this.props.handleUserSelection} key={user._id}/> : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Documents;
