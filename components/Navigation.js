import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import AddCity from "./Screens/AddCity";
import Cities from "./Screens/Cities";
import Places from "./Screens/Places";

const Stack = createStackNavigator({
	AddCity: {
		screen: AddCity,
		navigationOptions: {
			headerShown: false
		}
	},
	Cities: {
		screen: Cities,
		navigationOptions: {
			headerShown: false
		}
	},
	Places: {
		screen: Places,
		navigationOptions: {
			headerShown: false
		}
	}
});
const AppContainer = createAppContainer(Stack);
export default AppContainer;