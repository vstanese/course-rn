import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CreateColor from "./src/screens/CreateColor";
import UseReducerCreateColor from "./src/screens/UseReducerCreateColor";
import CreateColorMagda from "./src/screens/ModificareMagdaParinte";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CreateColor: CreateColor,
    UseReducerCreateColor: UseReducerCreateColor,
    CreateColorMagda: CreateColorMagda,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
