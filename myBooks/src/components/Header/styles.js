import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: ${74 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: ${metrics.basePadding}px;
  padding-right: ${metrics.basePadding}px;
  background-color: ${colors.primary};
`;

export const Buttons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${metrics.basePadding * 2}px;
  border-bottom-width: 0.7px;
  border-bottom-color: ${colors.regularTransparent};
`;

export const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${colors.black};
`;

export const InputSearch = styled.TextInput.attrs({
  placeholder: 'Search...',
  selectionColor: colors.primary,
})`
  width: 220px;
  height: 40px;
  padding: ${metrics.basePadding}px;
  position: absolute;
  top: 37px;
  left: 150px;
  border-top-left-radius: ${metrics.baseRadius}px;
  border-bottom-right-radius: ${metrics.baseRadius}px;
  border-bottom-left-radius: ${metrics.baseRadius}px;
  background-color: ${colors.white};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})`
  align-items: ${props => props.align || 'flex-start'};
  margin: 0 ${metrics.baseMargin}px ${metrics.baseMargin * 2}px;
`;

export const Space = styled.View`
  margin: 0 ${metrics.baseMargin}px ${metrics.baseMargin * 2}px;
`;

export const Clean = styled.TouchableOpacity`
  height: 30px;
  width: 130px;
  position: absolute;
  justify-content: center;
  top: 75px;
  left: 10px;
  padding: 0 ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.lighter};
`;

export const Filter = styled.Text`
  font-size: 15px;
  text-align: center;
`;
