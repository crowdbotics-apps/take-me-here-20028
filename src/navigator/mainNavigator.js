import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile97501Navigator from '../features/UserProfile97501/navigator';
import Maps97482Navigator from '../features/Maps97482/navigator';
import Settings97460Navigator from '../features/Settings97460/navigator';
import Settings97445Navigator from '../features/Settings97445/navigator';
import NotificationList97444Navigator from '../features/NotificationList97444/navigator';
import Maps97443Navigator from '../features/Maps97443/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile97501: { screen: UserProfile97501Navigator },
Maps97482: { screen: Maps97482Navigator },
Settings97460: { screen: Settings97460Navigator },
Settings97445: { screen: Settings97445Navigator },
NotificationList97444: { screen: NotificationList97444Navigator },
Maps97443: { screen: Maps97443Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
