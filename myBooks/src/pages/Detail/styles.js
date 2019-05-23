import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderBook = styled.View`
  flex-direction: row;
  height: 250px;
  padding: ${metrics.basePadding * 2}px;
  background-color: ${colors.primary};
`;

export const Image = styled.View`
  justify-content: space-around;
`;

export const Cover = styled.ImageBackground`
  height: 150px;
  width: 100px;
  box-shadow: 0px 10px 10px ${colors.darkTransparent};
`;

export const Pags = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${colors.regular};
`;

export const Info = styled.View`
  width: 250px;
  margin-left: ${metrics.baseMargin * 2}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: ${metrics.baseMargin / 2}px;
`;

export const Author = styled.Text`
  font-size: 15px;
  margin-top: ${metrics.baseMargin / 2}px;
  color: ${colors.regular};
`;

export const Evaluation = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${metrics.baseMargin * 2}px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: ${metrics.baseMargin}px;
`;

export const Star = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  margin-top: ${metrics.baseMargin * 2}px;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;

export const Buy = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-right: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius * 3}px;
  background-color: ${props => props.color || colors.blue};
  box-shadow: 0px 10px 10px ${colors.darkTransparent};
`;

export const Like = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: ${metrics.baseRadius * 5}px;
  background-color: ${props => props.color || colors.red};
`;

export const Description = styled.ScrollView`
  padding: ${metrics.basePadding}px;
`;

export const Desc = styled.Text`
  font-size: 15px;
  line-height: 25;
  text-align: left;
  color: ${colors.dark};
  margin: ${metrics.baseMargin}px 0;
`;
