import React, { useEffect } from "react";
import { Container, Loading, LogoImg } from "./styles";
import LogoPreload from "../../assets/preload.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export default function Preload(){
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    useEffect(()=>{
        const checkToken =  async ()=>{

            const token = await AsyncStorage.getItem('token');
        
           if(token){
                navigation.reset(
                {routes:[{name: 'Splash'}]}
               );
            }else{
                navigation.navigate(
                   'Splash'
                   );
            
            }

        }
        checkToken();
    },[]);
    return(
        <Container>
            <LogoImg source={LogoPreload}/>
            <Loading size="large"/>
        </Container>
    );
}
