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
diasUteis()
{
    
}

function cartao()
{
    let escolhaMes = window.document.querySelector('input[name="escolhaMes"]:checked') //pergunta se o calculo será feito para o mês atual ou o proximo
    

    //inicio do calculo de dias úteis
    let data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth();

    if(escolhaMes.value == "proximo")
    {
        mes++;
        ano++
        if(mes >= 11)
        {
            mes = 0;
        }
    }
    

    let ultimoDia = new Date(ano, mes + 1, 0).getDate(); //data correspondente ao último dia do mês atual

    let diasUteis = 0;

    if(escolhaMes.value == "proximo")
    {
        for(let dia = 1; dia <= ultimoDia; dia++)
            {
                let dataAtual = new Date(ano, mes, dia);
                if(dataAtual.getDay() > 0 && dataAtual.getDay() < 6) //verifica se é um dia da semana e incrementa no contador
                {
                    diasUteis++;
                }
            }
    }
    else
    {
        for(let dia = data.getDate(); dia <= ultimoDia; dia++)
            {
                let dataAtual = new Date(ano, mes, dia);
                if(dataAtual.getDay() > 0 && dataAtual.getDay() < 6)
                {
                    diasUteis++;
                }
            }
    }
    



    let adicaoDias = Number((document.getElementById('adicaoDias')).value);
    diasUteis += adicaoDias;
    
    let feriado, gastoCartao;
    feriado = window.document.getElementById('feriados');
    let diasFeriado = Number(feriado.value);

    let saldoAtual = window.document.getElementById('saldo')
    let saldo = saldoAtual.value

    let res = window.document.getElementById('resultado'); //div do resultado final

    diasUteis = diasUteis - diasFeriado;

    let valorPassagem = document.querySelector('input[name="passagem"]:checked');
    let usos = document.querySelector('input[name="usos"]:checked');

    

    if(valorPassagem.value == "outro")
    {
        let reais = document.getElementById('reais');
        let centavos = document.getElementById('centavos'); //é necessario colocar duas casas
        let valorFinal = Number(reais.value) + (Number(centavos.value) / 100); //faz o calculo baseado no valor inserido 

        gastoCartao = diasUteis * (valorFinal * usos.value);
        
    }
    else
    {
        gastoCartao = diasUteis * (valorPassagem.value * usos.value);

             
    }
    gastoCartao = gastoCartao - Number(saldo)
    if(gastoCartao > 0)
    {
        res.innerHTML = `Você vai precisar gastar RS${gastoCartao.toFixed(2)} com o cartão no mês ${mes+1}`
    }
    else
    {
        res.innerHTML = `Não é necessário recarregar o cartão`
    }
      


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
