import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ListActions } from '~/store/ducks/list';

import {
  Container,
  Buttons,
  Title,
  TextTitle,
  InputSearch,
  Button,
  Space,
  Clean,
  Filter,
} from './styles';

import { colors } from '~/styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    menu: PropTypes.bool,
    search: PropTypes.bool,
  };

  state = {
    searching: false,
    textSearch: '',
    titleSearch: '',
  };

  handleDrawer = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleSearch = async (textSearch) => {
    const { loadListRequest } = await this.props;

    if (textSearch === '') {
      textSearch = '%27%27';
    }

    loadListRequest(textSearch, 0);

    if (textSearch !== '%27%27') {
      this.setState({ titleSearch: textSearch });
    } else {
      this.setState({ titleSearch: '' });
    }

    this.setState({ textSearch: '', searching: false });
  };

  clearFilter = async () => {
    const { loadListRequest } = await this.props;

    loadListRequest('%27%27', 0);

    this.setState({ titleSearch: '' });
  };

  render() {
    const { searching, textSearch, titleSearch } = this.state;
    const { title, menu, search } = this.props;

    return (
      <Container>
        <Buttons>
          {menu ? (
            <Button onPress={() => this.handleDrawer()}>
              <Icon name="menu" size={20} color={colors.black} />
            </Button>
          ) : (
            <Button onPress={() => this.handleBack()}>
              <IconMCI name="arrow-left" size={25} color={colors.black} />
            </Button>
          )}
          <Title>
            <TextTitle>{titleSearch !== '' ? titleSearch : title}</TextTitle>
          </Title>
          {searching && (
            <InputSearch
              value={textSearch}
              autoCapitalize="words"
              autoCorrect={false}
              autoFocus
              maxLength={30}
              onChangeText={text => this.setState({ textSearch: text })}
              onSubmitEditing={() => this.handleSearch(textSearch)}
            />
          )}
          {search ? (
            <Button align="flex-end" onPress={() => this.setState({ searching: !searching })}>
              <Icon name="magnifier" size={20} color={colors.black} />
            </Button>
          ) : (
            <Space />
          )}
        </Buttons>
        {titleSearch !== '' && (
          <Clean onPress={() => this.clearFilter()}>
            <Filter>Clear Filter x</Filter>
          </Clean>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withNavigation(Header));
