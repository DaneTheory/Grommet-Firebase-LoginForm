import React, { Component } from 'react';
import fire from './config/fireConfig';
import Login from './Login';
import Home from './Home';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.authListener = this.authListener.bind(this);
    this.state = {
      user: {}
    };
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        this.setState({user});
      } else {
        this.setState({user : null});
      }
    });
  }

  componentDidMount(){
    this.authListener();
  }

  render() {
    return(
      <div>
        {this.state.user ? (<Home/>) : (<Login />) }
      </div>
    )
  }
};