let duracaoTotal = [];
let duracaoAssistida = [];
let duracaoDesejada = [];

function adicionaFilme(duracaoTotal, duracaoAssistida, duracaoDesejada) {
    // let nomeFilme = document.querySelector('#nome_filme').value;
    // let categoria = document.querySelector('#categoria').value;
    
    let campo = document.querySelector('#duracao_filme').value;
    let conclusao = document.querySelector('#conclusao').value;

    let [h, m] = campo.split(':');
    h = Number(h);
    m = Number(m);
    let duracaoEmMinutos = (h * 60) + m;

    duracaoTotal.push(duracaoEmMinutos);

    let minutosAssistidos = 0;
    let minutosDesejados = 0;

    for(let i=0; i<duracaoTotal.length; i++) {
        if(conclusao == 'sim') {
            duracaoDesejada[i] = 0;
            duracaoAssistida.push(duracaoEmMinutos);
            minutosAssistidos += duracaoAssistida[i];

            let resumoDuracao = document.querySelector('#minutos_assistidos');
            resumoDuracao.textContent = minutosAssistidos + "min";
            
        } else {
            duracaoAssistida[i] = 0;
            duracaoDesejada.push(duracaoEmMinutos);
            minutosDesejados += duracaoDesejada[i];

            let resumoDuracaoDesejada = document.querySelector('#minutos_desejados');
            resumoDuracaoDesejada.textContent = minutosDesejados + "min";
            
        }
    }
}