import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Auth from 'ho';
const ScrollImages = createSwitchNavigator({
    SplashScreen,
    Home,
    Auth,
  });
  export default createAppContainer(ScrollImages);