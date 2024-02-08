import {
    Container,
    AreaIcons,
    MainIcon,
    BackIcon,
    StatusTask,
    TotalTask
} from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    icon:any;
    status:any;
    total:any;
    size:any;
    height:any;
    top:any;
    color:string;
    coloricon: any;
    colortext:any;
}

export function MyTask({ icon, status, total, size, height,top, color, coloricon, colortext  }: Props) {
    
console.log(icon.length)

    return (
        <Container
        style={{height: height, marginTop: top, backgroundColor: color}}
        >
            
                <AreaIcons>
                    <MainIcon color={coloricon} size={size} name={icon} />
                    <BackIcon size={20} name="skip-next"  />
                </AreaIcons>
                <StatusTask style={{
                    color: colortext
                }}>{status}</StatusTask>
                <TotalTask style={{
                    color: colortext
                }}>{total} Task</TotalTask>
           
        </Container>
    );
}