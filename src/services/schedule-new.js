import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}) {
    try {
        //faz uma aquisicao para enviar os dados do agendamento
        const response = await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, when}),
        });

        // Verificar o status da resposta
        if (!response.ok) {
            console.log("Erro na requisição, código:", response.status);
            const errorText = await response.text();
            console.log("Conteúdo de erro:", errorText);
            alert("Não foi possível agendar");
            return;
        }

        // Verificar o conteúdo da resposta antes de fazer o JSON.parse
        const textResponse = await response.text();
        console.log("Resposta do servidor:", textResponse); // Aqui você verá o que o servidor realmente está retornando

        // Se a resposta for válida, tente fazer o parse para JSON
        const data = JSON.parse(textResponse);
        console.log("Resposta JSON:", data);

        alert("Agendamento realizado com sucesso");

    } catch (error) {
        console.log("Erro ao processar a requisição:", error);
        alert("Não foi possível agendar");
    }
}
