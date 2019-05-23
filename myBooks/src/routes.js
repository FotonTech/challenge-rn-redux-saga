import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { colors } from './styles';

import Home from '~/pages/Home';
import List from '~/pages/List';
import Detail from '~/pages/Detail';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Drawer: createDrawerNavigator(
        {
          Home,
          List,
        },
        {
          contentOptions: {
            activeTintColor: colors.primary,
            inativeTintColor: colors.black,
          },
        },
      ),
      Detail,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
