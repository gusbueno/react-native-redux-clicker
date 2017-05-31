import React from 'react';
import {Text} from 'react-native';

class HelloMessage extends React.Component {
  render() {
    console.log('Hello World!');
    return <Text>Hello {this.props.name}</Text>;
  }
}

export default HelloMessage;
