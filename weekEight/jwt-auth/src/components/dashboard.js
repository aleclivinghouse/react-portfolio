import React from 'react';
import connect from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectData} from '../actions/protect-data';

export class Dashboard extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchProtectedData());
  }

  render(){
    return (
      <div className="dashboard">
        Username: {this.props.username}
      </div>
      <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Protected data: {this.props.protectedData}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {curreentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName}  ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export defualt requiresLogin()connect(mapStateToProps)(Dashboard);
