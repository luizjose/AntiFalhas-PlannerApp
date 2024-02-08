import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import CustomTabs from "../components/CustomTabs";
import Task from "../screens/Task";
import Graphic from "../screens/Graphic";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
export default function TabsMain(){
    return(
        <Tab.Navigator   tabBar={props => <CustomTabs  {...props} />} >
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Tab.Screen name="Task" component={Task} options={{headerShown: false}}/>
            <Tab.Screen name="Graphic" component={Graphic} options={{headerShown: false}} />
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        </Tab.Navigator>
    );
}