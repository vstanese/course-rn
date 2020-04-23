import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CounterScreenWrong from "./src/screens/StateCounterWrong";
import UseStateScreen from "./src/screens/UseStateScreen";
import ColorScreen from "./src/screens/ColorScreen";
import CreateColor from "./src/screens/CreateColor";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CounterScreenWrong: CounterScreenWrong,
    UseStateScreen: UseStateScreen,
    ColorScreen: ColorScreen,
    CreateColor: CreateColor
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
