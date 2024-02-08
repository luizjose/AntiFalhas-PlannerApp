
import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Title, Text, CircularProgressbar } from "./styles";
import { Ionicons,AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProps } from "types/AppStackNavigationProps";
import { Button, TouchableOpacity } from "react-native";

const INITIAL_TIME_IN_SECONDS = 10 * 60; // 25 minutos
const SHORT_BREAK_TIME_IN_SECONDS = 5 * 60; // 5 minutos
const LONG_BREAK_TIME_IN_SECONDS = 10 * 60; // 10 minutos


export default function Graphic() {
  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS);
  const [active, setActive] = useState(false);
  const navigation = useNavigation<AppStackNavigationProps>();

  
  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount((state) => state - 1);
      }, 1000);

      if (count === 0) {
        navigation.navigate("Congrats");
        setActive(false);
        setCount(INITIAL_TIME_IN_SECONDS);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [active, count, navigation]);

  const minutes = useMemo(() => Math.floor(count / 60), [count]);
  const seconds = useMemo(() => count % 60, [count]);
  const progress = useMemo(() => (count * 100) / INITIAL_TIME_IN_SECONDS, [
    count,
  ]);
  const iconButton = useMemo(
    () => (
      <AntDesign
        name={active ? "pausecircle" : "play"}
        size={80}
        weigth="bold"
        color={active ? "#AA2834": "#00B37E"}
        
      />
    ),
    [active]
  );

  const toggleTimer = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <Container>
      <StatusBar style="auto" />
      <Title>Vamos nos concentrar por</Title>
      <CircularProgressbar fill={progress}>
        {() => (
          <Text>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Text>
        )}
      </CircularProgressbar>
      <TouchableOpacity onPress={toggleTimer} style={{ width: 85, height: 85, backgroundColor:'white', borderRadius: 40, justifyContent:"center", alignItems: 'center'}}>{iconButton}</TouchableOpacity>
    </Container>
  );
}
