import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import { Container, Cover, Title } from './styles';

class Book extends Component {
  static propTypes = {
    info: PropTypes.shape({
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleDetailPress = (book) => {
    const { navigation } = this.props;

    navigation.navigate('Detail', { book });
  };

  render() {
    const { info } = this.props;
    const { volumeInfo = {} } = info;
    const { imageLinks = {} } = volumeInfo;
    const { thumbnail = null } = imageLinks;

    return (
      <Container onPress={() => this.handleDetailPress(info)}>
        {thumbnail ? <Cover source={{ uri: thumbnail }} /> : <Title>Without Cover</Title>}
      </Container>
    );
  }
}

export default withNavigation(Book);
