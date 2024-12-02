import {schedulesDay} from "../schedules/load.js"

//selecionar o imput de data

const selectedDate=document.getElementById("date")

//recarregar a lista de horarios qdo o input de data mudar

selectedDate.onchange=()=>schedulesDay()