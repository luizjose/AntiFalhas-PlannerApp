import { ScrollView, Text, View } from "react-native";
import { 
    Avatar, 
    Container, 
    DescriptionText, 
    MyTaskArea, 
    TitleTask, 
    UserText, 
    WelcomeArea, 
    WelcomeTextArea,
    CardTasks,
    TodayTaskArea,
    TaskTodayList
} from "./styles";
import  AvatarIcon  from '../../assets/avatar.png'
import {MyTask} from "../../components/MyTask";
import { TaskToday } from "../../components/TaskToday";

export default function Home(){
    return(
        <Container>
            <WelcomeArea>
                <WelcomeTextArea>
                    <UserText>Olá, Luiz</UserText>
                    <DescriptionText>Vamos tornar este dia produtivo</DescriptionText>
                </WelcomeTextArea>
                <Avatar source={AvatarIcon}/>
            </WelcomeArea>
            <MyTaskArea style={{flex:1}}>
                <TitleTask>Minhas Tarefas</TitleTask>
                <CardTasks>
                <MyTask  icon="house" coloricon="#000" colortext="#000" top={15} height={150} size={50} status="Completo" total="10" color="#7DC8E7" />
                <MyTask icon="access-time" coloricon="#fff" colortext="#fff" top={15} height={115} size={30} status="Pendente" total="10" color="#7D88E7" />
                <MyTask icon="cancel" coloricon="#fff" colortext="#fff" top={15}  height={115} size={30} status="Cancelado" total="10" color="#E77D7D"  />
                <MyTask icon="add-task" coloricon="#000" colortext="#000" top={-20} height={150} size={50} status="Em andamento" total="10" color="#81E89E" />
                </CardTasks>
            </MyTaskArea>
            <TodayTaskArea>
                <TitleTask>Tarefas Hoje</TitleTask>
                <TaskTodayList nestedScrollEnabled={true}>
                    <TaskToday
                        title="Lavar Roupas"
                        startTime="07:00"
                        endTime="08:00"
                        details="concluido"
                        status={3}
                    />
                     <TaskToday
                        title="Lavar Roupas"
                        startTime="07:00"
                        endTime="08:00"
                        details="pendente"
                        status={1}
                    />
                </TaskTodayList>

            </TodayTaskArea>
            
        </Container>
    );
}