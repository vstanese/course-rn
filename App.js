import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BoxesScreen from "./src/screens/BoxesScreen";
import FlexDemo from "./src/screens/FlexDemo";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Boxes: BoxesScreen,
    Flex: FlexDemo,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
