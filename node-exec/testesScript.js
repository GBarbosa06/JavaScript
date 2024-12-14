const data = new Date();
    const ano = data.getFullYear();
    const mes = data.getMonth();

    const ultimoDia = new Date(ano, mes + 1, 0).getDate(); //data correspondente ao último dia do mês atual

    let diasUteis = 0;

    for(var dia = 1; dia <= ultimoDia; dia++)
    {
        let dataAtual = new Date(ano, mes, dia);
        if(dataAtual.getDay() > 0 && dataAtual.getDay() < 6) //verifica se é um dia da semana e incrementa no contador
        {
            diasUteis++;
        }
    }