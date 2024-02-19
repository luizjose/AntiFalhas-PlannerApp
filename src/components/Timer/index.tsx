import { CircularProgressbar, Container, Text } from "./styles";

export default function Timer({tempo, minutes, seconds }){
    console.log(tempo, '12');
return(
    <Container>
<CircularProgressbar
duration={tempo}
fill={tempo}
>
{() => (
          <Text>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Text>
        )}

</CircularProgressbar>
    </Container>
);
}