import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponentWithRedux(
    "awesome-places.AuthScreen",
    () => AuthScreen,
    Provider,
    store
);

Navigation.registerComponentWithRedux(
    "awesome-places.SharePlaceScreen",
    () => SharePlaceScreen,
    Provider,
    store
);

Navigation.registerComponentWithRedux(
    "awesome-places.FindPlaceScreen",
    () => FindPlaceScreen,
    Provider,
    store
);

Navigation.registerComponentWithRedux(
  "awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen,
  Provider,
  store
);

Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'awesome-places.AuthScreen',
          passProps: {
            text: 'stack with one child'
          }
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'Auth screen'
          }
        }
      }
    }
  }
});
