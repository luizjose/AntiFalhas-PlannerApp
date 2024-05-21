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
type Props = {
    weekday: any,
    number: any
}

export default function Task() {
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    const [listDays, setListDays] = useState([]);
    const [isSelect, setIsSelect] = useState<any>();
    const [tasks, setTasks] = useState<any>(task);
    const [reload, setReload] = useState(false);
    const [search, setSearch] = useState<any>('');
    // Para forçar a renderização, você pode chamar:
    const selectedDateString = `${selectedDay.toString().padStart(2, '0')}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedYear}`;

    useEffect(() => {
        let today = new Date();
        setSelectedYear(today.getFullYear());
        setSelectedMonth(today.getMonth());
        setSelectedDay(today.getDate().toString().padStart(2, '0'));

    }, []);
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
                number: formattedDay,
                month: day.getMonth(),
                year: day.getFullYear()
            });
        }
        console.log(week, 1)
        return week;
    };

    useEffect(() => {


        setListDays(calculateWeekDays());
        // console.log(listDays)

    }, [selectedYear, selectedMonth, selectedDay]);

    const handleLeftWeekClick = async () => {
        let previousWeek = await new Date(selectedYear, selectedMonth, selectedDay - 7);
        await setSelectedYear(previousWeek.getFullYear());
        await setSelectedMonth(previousWeek.getMonth());
        await setSelectedDay(previousWeek.getDate());
    };

    const handleNextWeekClick = async () => {
        const res = parseInt(selectedDay, 10) + 7;
        let nextWeek = await new Date(selectedYear, selectedMonth, res);

        console.log(res)
        await setSelectedYear(nextWeek.getFullYear());
        await setSelectedMonth(nextWeek.getMonth());
        await setSelectedDay(nextWeek.getDate());
        console.log(months[selectedMonth]);
    };
    return (
        <Container >
            <SearchArea>
                <SearchLupa name="search" size={24} color="#00B37E" />
                <SearchInput
                    placeholder="Pesquisar Tarefa"
                    placeholderTextColor="#E1E1E6"
                    value={search}
                    onChangeText={text => setSearch(text)}
                />
            </SearchArea>
            {listDays && listDays.length > 0 &&
                <DataItem style={{
                    backgroundColor: '#f2f2f2',
                    borderRadius: 10,

                    marginTop: 10,
                    //marginBottom: 10,
                    padding: 10,
                    maxHeight: 110,
                    minHeight: 110

                }}>
                    <DateInfo>

                        <DateTitleArea>
                            <DateTitle>{months[selectedMonth] + ' - ' + selectedYear}</DateTitle>
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
                                    onPress={async () => {
                                       await setSelectedDay(item.number);
                                        await setSelectedMonth(item.month);
                                       await  setSelectedYear(item.year);
                                        await setIsSelect(item.number);
                                        await console.log(`${selectedDay.toString().padStart(2, '0')}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedYear}`);

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
                    {tasks.filter((task: any) =>
                        task.title.toLowerCase().includes(search.toLowerCase()) &&
                        task.date == selectedDateString
                    ).map((task:any, index:any) => (
                        <TaskToday
                            key={index}
                            title={task.title}
                            startTime={task.startTime}
                            endTime={task.endTime}
                            details={task.details}
                            status={task.status}
                        />
                    ))}
                </TaskTodayList>
            </TodayTaskArea>
        </Container>
    );
}
const task = [
    {
        "title": "Lavar Roupass",
        "startTime": "07:00",
        "endTime": "08:20",
        "details": "concluido",
        "date": "29-04-2024",
        "status": 3
    },
    {
        "title": "Limpar a casa",
        "startTime": "09:00",
        "endTime": "10:00",
        "details": "pendente",
        "date": "30-04-2024",
        "status": 1
    },
    {
        "title": "Fazer compras",
        "startTime": "11:00",
        "endTime": "12:00",
        "date": "01-05-2024",
        "details": "em progresso",
        "status": 2
    }
];