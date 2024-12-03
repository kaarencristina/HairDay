import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"
import { hoursClick } from "./hours-click.js"

const hours=document.getElementById("hours")

export function hoursLoad({date, dailySchedules}){
    //limpa  a lista de hours

    hours.innerHTML=""

        //obtem a lista de todos os horarios ocupados
    const unavailableHours=dailySchedules.map((schedule)=>dayjs(schedule.when).format("HH:mm"))
    const opening=openingHours.map((hour)=>{
        //recupera somente a hora
        const [scheduleHour]=hour.split(":")
        //add a hr na data e verificar se esta no passado
        const isHourPast=dayjs(date).add(scheduleHour,"hour").isBefore(dayjs())
        
        const available=!unavailableHours.includes(hour)&&!isHourPast
        return{
            hour,
            available
        }
    })

    //renderizar os horarios
    opening.forEach(({hour,available})=>{
        const li=document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" :"hour-unavailable")

        li.textContent=hour

        if(hour==="9:00"){
            hourHeaderAdd("Manhã")
        }else if(hour==="13:00"){
            hourHeaderAdd("Tarde")
        }else if(hour==="18:00"){
            hourHeaderAdd("Noite")
        }
        hours.append(li)

    })

    //add o evento de lick nos horarios disponiveis
    hoursClick()
}

function hourHeaderAdd(title){
    const header=document.createElement("li")
    header.classList.add("hour-period")
    header.textContent=title
    hours.append(header)
}