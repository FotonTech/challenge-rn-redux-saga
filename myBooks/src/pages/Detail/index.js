import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  HeaderBook,
  Image,
  Cover,
  Pags,
  Info,
  Title,
  Author,
  Price,
  Evaluation,
  Star,
  Buttons,
  Text,
  Buy,
  Like,
  Description,
  Desc,
} from './styles';
import { colors } from '~/styles';

import Header from '~/components/Header';

export default class Detail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    buy: false,
    like: false,
  };

  createStar = (nItem) => {
    const star = [];

    for (let index = 1; index <= 5; index++) {
      if (index > nItem) {
        star.push(
          <Icon
            name="star"
            size={13}
            color={colors.regularTransparent}
            solid
            key={index}
            style={{ marginRight: 3 }}
          />,
        );
      } else {
        star.push(
          <Icon
            name="star"
            size={13}
            color={colors.darkerTransparent}
            solid
            key={index}
            style={{ marginRight: 3 }}
          />,
        );
      }
    }

    return star;
  };

  handleBuy = () => {
    const { buy } = this.state;

    this.setState({ buy: !buy });
  };

  handleLike = () => {
    const { like } = this.state;

    this.setState({ like: !like });
  };

  render() {
    const { buy, like } = this.state;
    const { navigation } = this.props;
    const book = navigation.getParam('book');
    const { volumeInfo = {}, saleInfo = {} } = book;

    const {
      categories = [''],
      pageCount = 0,
      imageLinks = {},
      title = '',
      authors = [''],
      averageRating = 0,
      description = '',
    } = volumeInfo;

    const { isEbook = false, listPrice = {} } = saleInfo;

    const { thumbnail = null } = imageLinks;
    const { amount = 0.0 } = listPrice;

    return (
      <Container>
        <Header title={categories[0]} />
        <HeaderBook>
          <Image>
            <Cover source={{ uri: thumbnail }} />
            <Pags>{`${pageCount}  pages`}</Pags>
          </Image>
          <Info>
            <Title>{title}</Title>
            <Author>{`by ${authors[0]}`}</Author>
            <Evaluation>
              {isEbook && <Price>{`$${amount}`}</Price>}
              <Star>{this.createStar(averageRating)}</Star>
            </Evaluation>
            <Buttons>
              {isEbook && (
                <Buy onPress={() => this.handleBuy()} color={buy ? colors.light : null}>
                  <Text>Buy</Text>
                </Buy>
              )}
              <Like onPress={() => this.handleLike()} color={like ? colors.darkRed : null}>
                <Icon name="heart" size={17} color={colors.white} />
              </Like>
            </Buttons>
          </Info>
        </HeaderBook>
        <Description>
          {description.split('. ').map(item => (
            <Desc>{item}.</Desc>
          ))}
        </Description>
      </Container>
    );
  }
}
