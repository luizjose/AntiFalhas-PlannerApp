import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Preload from "../screens/Preload";
import Login from "../screens/Login";
import Splash from "../screens/Splash";
import SignUp from "../screens/SignUp";
import TabsMain from "./tabs.routes";

const {Navigator, Screen} = createNativeStackNavigator();

export default function MainRoutes(){
    return (
            <Navigator 
            initialRouteName="Preload"
              screenOptions={{
                headerShown: false
              }}
            >
                <Screen name="Preload" component={Preload} />
                <Screen name="Login" component={Login} />
                <Screen name="Splash" component={Splash} />
                <Screen name="SignUp" component={SignUp}/>
                <Screen name="TabsMain" component={TabsMain} />
            </Navigator>
       
    );
}
