import React, { Component } from 'react';

class NavBarWithSignIn extends Component {

  render(){
    return(
      <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="200">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">MemeShare</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }


}

export default NavBarWithSignIn;
