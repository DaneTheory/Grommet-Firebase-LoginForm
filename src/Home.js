import React, { Component } from 'react';
import { grommet, Grommet, Button, Box, Heading } from 'grommet';
import fire from './config/fireConfig';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout () {
    fire.auth().signOut();
  }
  render() {
    return(
      <Grommet theme={grommet}>
        <Box pad='medium' margin={{ vertical: 'small' }}
            background="neutral-3" >
          <Heading size='small'>HELLO, YOU ARE HOME!!!</Heading>
        </Box>
        <Box pad='medium' margin={{ vertical: 'small' }} width="small" height="small">
          <Button primary name='logout' label='Logout' onClick={this.logout}></Button>
        </Box>
      </Grommet>
    )
  }
};