// Importações necessárias
import React, { useEffect, useState } from "react";
import { 
    Container, 
    DataItem, 
    DateInfo, 
    DateItem, 
    DateItemNumber, 
    DateItemWeekDay, 
    DateList, 
    DateNextArea,
    DatePrevArea,
    DateTitle, 
    DateTitleArea, 
    NavNextIcon, 
    NavPrevIcon, 
    SearchArea, 
    SearchInput, 
    SearchLupa, 
    TaskTodayList, 
    TitleTask, 
    TodayTaskArea
} from "./styles";
import { TaskToday } from "../../components/TaskToday";

const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

// Array com os dias da semana
const days = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab'
];
type Props= {
    weekday: any,
    number: any
}

export default function Task() {
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    const [listDays, setListDays] = useState([]);
    const [isSelect, setIsSelect] = useState<any>() 
   
    useEffect(() => {
        let today = new Date();
        setSelectedYear(today.getFullYear());
        setSelectedMonth(today.getMonth());
        setSelectedDay(today.getDate().toString().padStart(2, '0'));
        
           }, []);

    useEffect(() => {
        const calculateWeekDays = () => {
            let today = new Date(selectedYear, selectedMonth, selectedDay);
            let curr = new Date(today);
            let week = [];

            for (let i = 0; i < 7; i++) {
                let first = curr.getDate() - curr.getDay() + i;
                let day = new Date(curr.setDate(first));
                let formattedDay = day.getDate() < 10 ? '0' + day.getDate() : day.getDate();
                
                week.push({
                    weekday: days[i],
                    number: formattedDay
                });
            }
            return week;
        };

        setListDays(calculateWeekDays());
        console.log(selectedDay)
    }, [selectedYear, selectedMonth, selectedDay]);

    const handleLeftWeekClick = async() => {
        let previousWeek = await new Date(selectedYear, selectedMonth, selectedDay - 7);
        await setSelectedYear(previousWeek.getFullYear());
        await setSelectedMonth(previousWeek.getMonth());
        await setSelectedDay(previousWeek.getDate());
    };
    
    const handleNextWeekClick = async() => {
        const res = parseInt(selectedDay, 10) + 7;
        let nextWeek = await new Date(selectedYear, selectedMonth, res);

        console.log(res)
        await setSelectedYear(nextWeek.getFullYear());
        await setSelectedMonth(nextWeek.getMonth());
        await setSelectedDay(nextWeek.getDate());
        console.log(months[selectedMonth]);
    };
    return (
        <Container>
            <SearchArea>
                <SearchLupa name="search" size={24} color="#00B37E" />
                <SearchInput placeholder="Pesquisar Tarefa" placeholderTextColor="#E1E1E6" />
            </SearchArea>
            {listDays && listDays.length > 0 &&
                <DataItem>
                    <DateInfo>
                        
                        <DateTitleArea>
                            <DateTitle>{months[selectedMonth] +' - '+ selectedYear}</DateTitle>
                        </DateTitleArea>
                        
                    </DateInfo>
                    <DateList
                       
                    >
                        <DatePrevArea onPress={handleLeftWeekClick}>
                            <NavPrevIcon name="chevron-left" size={24} color="#000" />
                        </DatePrevArea>
                        {
                            listDays.map((item: any) => (
                                <DateItem
                                    key={item.number}
                                    onPress={() => {
                                        setSelectedDay(item.number);
                                        setIsSelect(item.number)
                                      console.log(item.number)
                                        console.log(item.number ,'-', selectedMonth +1 ,'-', selectedYear)
                                    }}
                                    style={{
                                        backgroundColor: item.number == selectedDay ? "#00875F" : 'transparent'
                                    }}
                                >
                                    <DateItemWeekDay
                                        style={{
                                            color: item.number == selectedDay ? "#fff" : '#000'
                                        }}
                                    >
                                        {item.weekday}
                                    </DateItemWeekDay>
                                    <DateItemNumber
                                        style={{
                                            color: item.number == selectedDay ? "#fff" : '#000'
                                        }}
                                    >
                                        {item.number}
                                    </DateItemNumber>
                                </DateItem>
                            ))
                        }
                        <DateNextArea onPress={handleNextWeekClick}>
                            <NavNextIcon name="chevron-right" size={24} color="#000" />
                        </DateNextArea>
                    </DateList>
                </DataItem>
            }
            <TodayTaskArea>
            <TitleTask>Tarefas Hoje</TitleTask>
                <TaskTodayList>
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
                          details="concluido"
                          status={3}
                    
                    />
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
                          details="concluido"
                          status={3}
                    
                    />
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
                          details="concluido"
                          status={3}
                    
                    />
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
                          details="concluido"
                          status={3}
                    
                    />
                </TaskTodayList>
            </TodayTaskArea>
        </Container>
    );
}
