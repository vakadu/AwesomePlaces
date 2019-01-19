import { Navigation } from 'react-native-navigation';

const startTabs = () => {
    Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [{
              stack: {
                children: [{
                  component: {
                    name: 'awesome-places.FindPlaceScreen',
                    passProps: {
                      text: 'FindPlaceScreen'
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    text: 'Find Place',
                    icon: require('../../assets/map.png'),
                  },
                  topBar: {
                    title: {
                      text: 'Find Place'
                    }
                  }
                }
              }
            },
            {
                stack: {
                  children: [{
                    component: {
                      name: 'awesome-places.SharePlaceScreen',
                      passProps: {
                        text: 'SharePlaceScreen'
                      }
                    }
                  }],
                  options: {
                    bottomTab: {
                      text: 'Share Place',
                      icon: require('../../assets/share.png'),
                    },
                    topBar: {
                        title: {
                          text: 'Share Place'
                        }
                      }
                  }
                }
              }
            ]
          }
        }
      });
}

export default startTabs;
