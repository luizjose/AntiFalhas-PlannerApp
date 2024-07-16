import { StatusBar } from "expo-status-bar";
import { Audio } from "expo-av";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Title, Text, CircularProgressbar, AreaPomodoro, AreaButton, ButtonTimes, TextButton } from "./styles";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Button, TouchableOpacity, Vibration, View } from "react-native";
import Timer from "../../components/Timer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";

// Tempos em segundos
const INITIAL_TIME_IN_SECONDS = 25 * 60; // 25 minutos
const SHORT_BREAK_TIME_IN_SECONDS = 1 * 60; // 5 minutos
const LONG_BREAK_TIME_IN_SECONDS = 10 * 60; // 10 minutos

export default function Graphic() {
  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS);
  const [active, setActive] = useState(false);
  const [type, setType] = useState("pomodoro"); // [pomodoro, short, long]
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../../../assets/sound.mp3') // Substitua pelo caminho do seu arquivo de som
      );
      setSound(sound);
    };
  
    loadSound();
  
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount((state) => state - 1);
      }, 1000);

      if (count === 0) {
        // Exibir toast e vibrar
        Vibration.vibrate(1000);
        Toast.show({
          type: 'success',
          text1: 'Tempo Acabou',
          text2: 'Seu período de trabalho/descanso acabou!',
        });
        if (sound) {
          sound.replayAsync();
        }
  
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
  const progress = useMemo(() => (count * 100) / (type === "pomodoro" ? INITIAL_TIME_IN_SECONDS : type === "short" ? SHORT_BREAK_TIME_IN_SECONDS : LONG_BREAK_TIME_IN_SECONDS), [count, type]);

  // Ícone do botão de pausa/play
  const iconButton = useMemo(
    () => (
      <AntDesign
        name={active ? "pausecircle" : "play"}
        size={74}
        weight="bold"
        color={active ? "#AA2834" : "#00B37E"}
      />
    ),
    [active]
  );

  // Função para alternar entre pausa e reprodução do timer
  const toggleTimer = useCallback(() => {
    setActive(!active);
  }, [active]);

  const stopTimer = () => {
    console.log(type);
    setActive(false);
    if (type === "pomodoro") {
      setCount(INITIAL_TIME_IN_SECONDS);
    } else if (type === "short") {
      setCount(SHORT_BREAK_TIME_IN_SECONDS);
    } else {
      setCount(LONG_BREAK_TIME_IN_SECONDS);
    }
  };

  const changeType = async (type: string) => {
    await setType(type);
    await setActive(false);
    if (type === "pomodoro") {
      await setCount(INITIAL_TIME_IN_SECONDS);
    } else if (type === "short") {
      await setCount(SHORT_BREAK_TIME_IN_SECONDS);
    } else {
      await setCount(LONG_BREAK_TIME_IN_SECONDS);
    }
  };

  return (
    <Container>
      <StatusBar style="light" />
      <AreaPomodoro>
        <AreaButton>
          <ButtonTimes
            style={{
              backgroundColor: type === "pomodoro" ? "#00875F" : "#7C7C8A",
              borderRadius: 20,
              padding: 5,
              width: 120,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => changeType('pomodoro')}
          >
            <TextButton
              style={{
                color: type === "pomodoro" ? "#FFFFFF" : "#000",
              }}
            >
              Pomodoro
            </TextButton>
          </ButtonTimes>
          <ButtonTimes
            style={{
              backgroundColor: type === "short" ? "#00875F" : "#7C7C8A",
              borderRadius: 20,
              padding: 5,
              width: 120,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => changeType('short')}
          >
            <TextButton
              style={{
                color: type === "short" ? "#FFFFFF" : "#000",
              }}
            >
              Descanso
            </TextButton>
          </ButtonTimes>
        </AreaButton>
        <Timer tempo={progress} minutes={minutes} seconds={seconds} />
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: 250,
          paddingHorizontal: 40,
        
        }}>
          <TouchableOpacity onPress={toggleTimer} style={{ width: 80, height: 80, backgroundColor: 'white', borderRadius: 40, justifyContent: "center", alignItems: 'center' }}>
            {iconButton}
          </TouchableOpacity>
          <TouchableOpacity onPress={stopTimer} style={{ width: 50, height: 50, backgroundColor: 'white', borderRadius: 25, justifyContent: "center", alignItems: 'center' }}>
            <FontAwesome name="stop-circle" size={50} color="#AA2834" />
          </TouchableOpacity>
        </View>
      </AreaPomodoro>
    </Container>
  );
}
