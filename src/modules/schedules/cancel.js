const periods=document.querySelectorAll(".period")
import { scheduleCancel } from "../../services/schedule-cancel.js"
import {schedulesDay} from "./load.js"


//gerar evento de clique para cada lista(manha,tarde, noite)

periods.forEach((period)=>{
    period.addEventListener("click",async(event)=>{ 
        
        if(event.target.classList.contains("cancel-icon")){
            //obter a li pai do elemento clicado
            const item=event.target.closest("li")
            const {id}=item.dataset

            if(id){
                const isConfirm=confirm("Tem certeza que deseja cancelar esse agendamento?")
                if(isConfirm){
                    await scheduleCancel({id})
                    schedulesDay()
                }
            }
        }

    })
})