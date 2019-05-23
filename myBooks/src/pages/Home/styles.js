import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const Body = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Image = styled.Image`
  width: 400px;
  height: 400px;
  align-self: center;
  opacity: 0.2;
`;
