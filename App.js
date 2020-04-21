import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListsScreen";
import ListsScreen from "./src/screens/ListsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: ComponentsScreen,
    Lists: ListsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
