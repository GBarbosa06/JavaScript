window.alert('Atualização 1.2.0 !!! Melhoria de usabilidade');


function carregar()
{
    let boasVindas = window.document.getElementById('recepcao')
    let data = new Date();
    let hora = data.getHours();
    
    if(hora >= 6 && hora < 12)
    {
        /* window.document.body.style.backgroundColor = '#E3A32D' */
        boasVindas.innerHTML = "Bom dia!"
    }
    else if(hora >= 12 && hora < 18)
    {
        /* window.document.body.style.backgroundColor = '#FCBEA4' */
        boasVindas.innerHTML = "Boa tarde!"
    }
    else
    {
        /* window.document.body.style.background = '#9113d4' */
        boasVindas.innerHTML = "Boa noite!"
    }
    
}

function cartao()
{
    let diasUteis, feriado, finsDeSemana = 8, diasUteisProximoMes = 5, gastoCartao;
    feriado = window.document.getElementById('feriados');
    let diasFeriado = Number(feriado.value);

    let saldoAtual = window.document.getElementById('saldo')
    let saldo = saldoAtual.value

    let res = window.document.getElementById('resultado'); //div do resultado final

    diasUteis = 30 - finsDeSemana - diasFeriado + diasUteisProximoMes;

    let valorPassagem = document.querySelector('input[name="passagem"]:checked');
    let usos = document.querySelector('input[name="usos"]:checked');


    if(valorPassagem.value == "outro")
    {
        let reais = document.getElementById('reais');
        let centavos = document.getElementById('centavos');

        let valorFinal = Number(reais.value) + (Number(centavos.value) / 100);

        gastoCartao = diasUteis * (valorFinal * usos.value);
        
    }
    else
    {
        gastoCartao = diasUteis * (valorPassagem.value * usos.value);

             
    }
    gastoCartao = gastoCartao - Number(saldo)
    res.innerHTML = `Você precisa gastar RS${gastoCartao.toFixed(2)} esse mês`  


    if(diasFeriado>28) //verificação se os dias de feriados passam de 28
        {
            res.innerHTML = `Campo de feriados incorreto`
        }


    
    
}

function outro()
{
    let caixaPersonalizada = window.document.getElementById('personalizado');
    caixaPersonalizada.style.display = 'inline'
}
