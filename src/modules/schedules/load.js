import{ hoursLoad} from "../form/hours-load.js"
import {scheduleFetchbyDay} from "../../services/schedule-fetch-by-day.js"
import {scheduleShow} from "../schedules/show.js"
 const selectedDate=document.getElementById("date")


export async function schedulesDay(){
    //obtem a data do input

    const date=selectedDate.value

    //buscar na api os agendamentos
    const dailySchedules=await scheduleFetchbyDay({date})
    
    //exibe os agendamentos
    scheduleShow({dailySchedules})

    //renderiza as horas disponiveis
    
    hoursLoad({date,dailySchedules})
}