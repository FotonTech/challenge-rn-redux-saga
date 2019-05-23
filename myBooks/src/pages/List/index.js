import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RefreshControl, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ListActions } from '~/store/ducks/list';

import {
  Container, BookList, Scroll, Error,
} from './styles';
import { colors } from '~/styles';

import Header from '~/components/Header';
import Book from '~/components/Book';

class List extends Component {
  static navigationOptions = {
    drawerLabel: 'Books',
    drawerIcon: ({ tintColor }) => <Icon name="book-open" size={20} color={tintColor} />,
  };

  static propTypes = {
    list: PropTypes.shape({
      items: PropTypes.array,
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
  };

  state = {
    refreshing: false,
    page: 0,
  };

  componentDidMount() {
    this.loadList();
  }

  refresh = async () => {
    const { loadListRequest, list } = await this.props;
    const { textSearch } = list;

    loadListRequest(textSearch, 0);

    this.setState({ page: 0, refreshing: false });
  };

  loadList = async () => {
    const { loadListRequest, list } = await this.props;
    const { textSearch = '%27%27' } = list;
    const { page } = this.state;

    loadListRequest(textSearch, page);
    this.setState({ page: page + 1 });
  };

  renderFooter = () => {
    const { list } = this.props;
    const { loading } = list;

    if (!loading) return null;
    return <ActivityIndicator />;
  };

  render() {
    const { refreshing } = this.state;
    const { list } = this.props;
    const { items = [], error = false } = list;

    return (
      <Container>
        <Header title="Books" menu search />
        {!error ? (
          <BookList
            data={items}
            keyExtractor={item => String(item.id)}
            onEndReached={() => this.loadList()}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => <Book info={item} />}
            ListFooterComponent={() => this.renderFooter()}
            refreshControl={(
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => this.refresh()}
                title="Loading..."
                titleColor={colors.grey}
                tintColor={colors.grey}
              />
)}
          />
        ) : (
          <Scroll
            refreshControl={(
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => this.refresh()}
                title="Loading..."
                titleColor={colors.grey}
                tintColor={colors.grey}
              />
)}
          >
            <Error>Connection failure, please try again...</Error>
          </Scroll>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
