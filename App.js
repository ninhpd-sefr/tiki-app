import HomeScreens from './screens/HomeScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileScreens from './screens/ProfileScreens';
import NotificationScreens from './screens/NotificationScreens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#157cdb',
          tabBarInactiveTintColor: '#262626',
        }}>
          <Tab.Screen
            name="Home"
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};
