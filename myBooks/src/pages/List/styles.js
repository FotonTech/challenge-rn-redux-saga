import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const BookList = styled.FlatList.attrs({
  contentContainerStyle: {
    justifyContent: 'space-between',
  },
  numColumns: 3,
})``;

export const Scroll = styled.ScrollView``;

export const Error = styled.Text`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: ${colors.danger};
`;
