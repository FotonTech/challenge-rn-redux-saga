import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { Container, Body, Image } from './styles';

import Header from '~/components/Header';

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
  };

  render() {
    return (
      <Container>
        <Header title="My Books" menu />
        <Body>
          <Image source={require('~/assets/images/bg.png')} />
        </Body>
      </Container>
    );
  }
}
