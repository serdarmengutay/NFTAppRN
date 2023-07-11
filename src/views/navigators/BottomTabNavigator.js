import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import { TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        backgroundColor: COLORS.white,
        borderTopWidth: 0.3,
        borderColor: "grey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const TabBarIcon = options.tabBarIcon;
        return (
          <TouchableOpacity
          onPress={() => navigation.navigate(route.name)}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TabBarIcon
              size={30}
              color={isFocused ? COLORS.black : COLORS.grey}
              focused={isFocused}
            />
            {isFocused && (
              <View
                style={{
                  width: 30,
                  height: 6,
                  position: "absolute",
                  backgroundColor: COLORS.black,
                  top: -20,
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Icon
              color={color}
              size={size}
              name={focused ? "home" : "home-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Icon
              color={color}
              size={size}
              name={focused ? "bell" : "bell-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Icon
              color={color}
              size={size}
              name={focused ? "heart" : "heart-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Icon
              color={color}
              size={size}
              name={focused ? "account" : "account-outline"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
