import dayjs from "dayjs"

const form=document.querySelector("form")


const selectedDate=document.getElementById("date")



// Carrega a data atual e formata corretamente
const today = dayjs().format("YYYY-MM-DD");
selectedDate.value = today;

// Define a data mínima
selectedDate.min = today;


form.onsubmit=(event)=>{
    event.preventDefault()
    
}