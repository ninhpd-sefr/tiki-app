import HomeScreens from './screens/HomeScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileScreens from './screens/ProfileScreens';
import NotificationScreens from './screens/NotificationScreens';
import rootReducer from './store/index'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ProductScreens from './screens/ProductScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreens from './screens/CartScreens';
import LoveScreen from './screens/LoveScreen';
const Stack = createNativeStackNavigator();

const store = createStore(
  rootReducer
)
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#157cdb',
            tabBarInactiveTintColor: '#262626',
          }}>
          <Tab.Screen
            name="HomeScreens"
            component={HomeScreens}
            options={{
              tabBarLabel: 'Trang chủ',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" size={26} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Notification"
            component={NotificationScreens}
            options={{
              tabBarLabel: 'Thông báo',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="notifications" size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreens}
            options={{
              tabBarLabel: 'Cá nhân',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" size={26} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="LoveScreen"
            component={LoveScreen}
            options={{
              tabBarLabel: 'Yêu thích',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="favorite" size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="ProductScreens"
            component={ProductScreens}
            options={{ tabBarButton: () => null, tabBarVisible: false }}
          />
          <Tab.Screen
            name="CartScreens"
            component={CartScreens}
            options={{ tabBarButton: () => null, tabBarVisible: false }}
          />
        </Tab.Navigator>

      </NavigationContainer>
    </Provider>

  );
};
