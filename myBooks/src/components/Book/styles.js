import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 150px;
  width: 100px;
  justify-content: center;
  margin: ${metrics.baseMargin + 5}px;
  background-color: ${colors.light};
`;

export const Cover = styled.Image`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;
