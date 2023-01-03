function adicionaFilme() {
    // let nomeFilme = document.querySelector('#nome_filme').value;
    // let categoria = document.querySelector('#categoria').value;
    let duracao = [];
    let campo = document.querySelector('#duracao_filme').value;
    let conclusao = document.querySelector('#modelo_conclusao').value;

    duracao.push(campo);
    console.log(duracao);

    let modeloDuracao = document.querySelector('#modelo_duracao_filme').value;
    if (modeloDuracao == 'horas') {
        duracao = duracao * 60;
    }

    let minutosAssistidos = 0;
    let minutosDesejados = 0;

    for(let i=0; i<duracao.length; i++) {
        if(conclusao == 'sim') {
            minutosAssistidos += duracao[i];
        } else {
            minutosDesejados += duracao[i];
        }
        console.log(minutosAssistidos);
    }

    let resumoDuracao = document.querySelector('#horas_assistidas');
    resumoDuracao.textContent = minutosAssistidos;

    let resumoDuracaoDesejada = document.querySelector('#horas_desejadas');
    resumoDuracaoDesejada.textContent = minutosDesejados;

}