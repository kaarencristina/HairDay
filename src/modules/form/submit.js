import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"

import {schedulesDay} from "../schedules/load.js"

const form=document.querySelector("form")
const clientName=document.getElementById("client")

const selectedDate=document.getElementById("date")



// Carrega a data atual e formata corretamente
const today = dayjs().format("YYYY-MM-DD");
selectedDate.value = today;

// Define a data mínima
selectedDate.min = today;


form.onsubmit=async(event)=>{
    event.preventDefault()
    try {
        //recuperando o nome do cliente
        const name=clientName.value.trim()

        if(!name){
            return alert("Informe o nome do cliente!")
        }

    //recupera o horario selecionado
    const hourSelected=document.querySelector(".hour-selected")

    if(!hourSelected){
        return alert("Seleciona o horário")
    }
        //recupera somente a hora
        const[hour]=hourSelected.innerText.split(":")


        //inserir a hora na data

        const when=dayjs(selectedDate.value).add(hour,"hour")

        //gera um id
        const id=new Date().getTime()

      await  scheduleNew({
            id,
            name,
            when
        })


        //recarrega os agendamentos
        await schedulesDay()
        clientName.value=""

    } catch (error) {
        alert("Não foi possível realizar o agendamento")
    }
    
}