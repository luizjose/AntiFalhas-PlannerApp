import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Title, Text, CircularProgressbar, AreaPomodoro, AreaButton, ButtonTimes, TextButton } from "./styles";
import { Ionicons,AntDesign } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";

import { Button, TouchableOpacity } from "react-native";
import Timer from "../../components/Timer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Tempos em segundos
const INITIAL_TIME_IN_SECONDS = 5 * 60; // 25 minutos
const SHORT_BREAK_TIME_IN_SECONDS = 5 * 60; // 5 minutos
const LONG_BREAK_TIME_IN_SECONDS = 10 * 60; // 10 minutos


export default function Graphic() {
  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS);
  const [active, setActive] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount((state) => state - 1);
      }, 1000);

      if (count === 0) {
        navigation.navigate("Congrats");
        setActive(false);
        
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [active, count, navigation]);

  // Calcula minutos e segundos
  const minutes = useMemo(() => Math.floor(count / 60), [count]);
  const seconds = useMemo(() => count % 60, [count]);
  // Calcula o progresso da barra de progresso
  const progress = useMemo(() => (count * 100) / INITIAL_TIME_IN_SECONDS, [
    count,
  ]);
  // Ícone do botão de pausa/play
  const iconButton = useMemo(
    () => (
      <AntDesign
        name={active ? "pausecircle" : "play"}
        size={75}
        weigth="bold"
        color={active ? "#AA2834": "#00B37E"}
        
      />
    ),
    [active]
  );
  // Função para alternar entre pausa e reprodução do timer
  const toggleTimer = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <Container>
      <StatusBar style="light" />
      <AreaPomodoro>
      <AreaButton>
      <ButtonTimes>
        <TextButton>Pomodoro</TextButton>
      </ButtonTimes>
      <ButtonTimes>
        <TextButton>Intervalo</TextButton>
      </ButtonTimes>
      </AreaButton>
      <Timer tempo={progress} minutes={minutes} seconds={seconds} />
      {/* Botão para pausar ou reproduzir o timer */}
      <TouchableOpacity onPress={toggleTimer} style={{ width: 80, height: 80, backgroundColor:'white', borderRadius: 40, justifyContent:"center", alignItems: 'center'}}>{iconButton}</TouchableOpacity>
      </AreaPomodoro>
    </Container>
  );
}
