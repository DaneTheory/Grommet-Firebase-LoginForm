import React, { Component } from 'react';
import { Box, Form, TextInput, FormField, Button, Heading, Grommet, grommet } from 'grommet';
import fire from './config/fireConfig';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      userName: "",
      password: ""
    };
  }

  handleChange= event => {
	this.setState({[event.target.name]:event.target.value});
  }
  login = event => {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.userName, this.state.password)
    .then((u)=>{})
    .catch((error)=>{console.log("Invalid username or password");});
  }
  signup() {
      fire.auth().createUserWithEmailAndPassword(this.state.userName, this.state.password)
      .then((u)=>{})
      .catch((error)=>{console.log("Error while signing up!!!")})
  }
	  
  render() {
    return (
      <Grommet theme={grommet} full>
        <Box fill justify="center" align="center" pad="xlarge" background="dark-2" gap="medium">
					<Box align="center" pad='medium' width="medium" height="medium"
						border={{ color: 'brand', size: 'medium' }} background={{ color: "light-2", opacity: "strong" }}>
            <Form>
							<FormField name="userName" label="UserName" validate={{ regexp: /^[a-z]/i }}>
								<TextInput name="userName" value = {this.state.userName} onChange = {this.handleChange}/>
							</FormField>
							<FormField name="password" label="Password" validate={{ regexp: /^([a-zA-Z0-9])/i }}>
								<TextInput name="password" type="password" value = {this.state.password}
									onChange={this.handleChange}/>
							</FormField>
							<Box direction="row" margin={{ top: "medium" }}>
								<Button type="submit" primary label="Login" onClick={this.login} pad="medium"
								  margin={{ horizontal: 'xsmall' }}/>
								<Button primary label="Sign up" onClick={this.signup} pad="medium" margin={{ horizontal: 'xsmall' }}/>
							</Box>
						</Form>
  		  	</Box>
        </Box>
      </Grommet>
    );
  }
}