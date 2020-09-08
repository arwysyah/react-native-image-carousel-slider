import {createStackNavigator} from 'react-navigation-stack';
import CarouselDisplay from './carouselDisplay';
import FullCarousel from './fullCarousel';


export default createStackNavigator({
  CarouselDisplay: {
    screen: CarouselDisplay,
    navigationOptions: {
      headerShown: false,
    },
  },
 
  FullCarousel: {
    screen: FullCarousel,
    navigationOptions: {
      headerShown: false,
    },
  },
});
