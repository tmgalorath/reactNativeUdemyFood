import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultsShow from './src/components/ResultsShow';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShow,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Business Search"
  }
})

export default createAppContainer(navigator)


