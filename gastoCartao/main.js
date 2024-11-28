window.alert('Atualização 1.1.0 !!! Melhoria de usabilidade');


function carregar()
{
    let boasVindas = window.document.getElementById('recepcao')
    let data = new Date();
    let hora = data.getHours();
    
    if(hora >= 6 && hora <= 12)
    {
        window.document.body.style.backgroundColor = '#E3A32D'
        boasVindas.innerHTML = "Bom dia!"
    }
    else if(hora >= 13 && hora <= 18)
    {
        window.document.body.style.backgroundColor = '#FCBEA4'
        boasVindas.innerHTML = "Boa tarde!"
    }
    else
    {
        window.document.body.style.backgroundColor = '#AE41E8'
        boasVindas.innerHTML = "Boa noite!"
    }
    
}

function cartao()
{
    let diasUteis, feriado, finsDeSemana = 8, diasUteisProximoMes = 5, gastoCartao;
    feriado = window.document.getElementById('feriados');
    let diasFeriado = Number(feriado.value)

    diasUteis = 30 - finsDeSemana - diasFeriado + diasUteisProximoMes;
    gastoCartao = diasUteis * 15.20;
    let res = window.document.getElementById('resultado');
    if(diasFeriado<28)
    {
        res.innerHTML = `Você precisa gastar RS${gastoCartao.toFixed(2)} esse mês`
    }
    else
    {
        res.innerHTML = `Digite um valor menor que 28`
    }
}