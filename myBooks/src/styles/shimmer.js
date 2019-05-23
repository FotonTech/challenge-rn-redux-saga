import { StyleSheet } from 'react-native';
import metrics from './metrics';
import colors from './colors';

const shimmer = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: metrics.baseRadius * 5,
    overflow: 'hidden',
    backgroundColor: colors.grey,
  },
});

export default shimmer;
