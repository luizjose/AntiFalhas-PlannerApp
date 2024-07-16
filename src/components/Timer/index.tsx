import { useEffect, useState } from "react";
import { CircularProgressbar, Container, Text } from "./styles";
import { Animated } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function Timer({ tempo, minutes, seconds }: { tempo: number; minutes: number; seconds: number }) {
    const [temp, setTemp] = useState(tempo);
    const [min, setMin] = useState(minutes);
    const [sec, setSec] = useState(seconds);

    useEffect(() => {
        setTemp(tempo);
        console.log(tempo);
    }, [tempo]);

    useEffect(() => {
        setMin(minutes);
        setSec(seconds);
        console.log(tempo, minutes, seconds);
    }, [minutes, seconds]);

    return (
        <Container>
            <AnimatedCircularProgress
                size={240}
                width={10}
                fill={temp}
                tintColor="#00e0ff"
                backgroundColor="#3d5875"
            >
                {() => (
                    <Text>
                        {String(min).padStart(2, "0")}:
                        {String(sec).padStart(2, "0")}
                    </Text>
                )}
            </AnimatedCircularProgress>
        </Container>
    );
}
