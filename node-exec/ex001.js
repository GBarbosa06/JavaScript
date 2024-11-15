const d = new Date();

let date = d.getDate();
let weekday = d.getDay();
let i;
let contador = 0;


console.log(date);
console.log(weekday);
domingo = date - weekday
console.log(`Domingo = dia ${domingo}`)


contador += 2;
while(domingo > 0)
{
    domingo -= 7;
    if(domingo > 1 && weekday != 6)
    {
        contador += 2;
    }
    else
    {
        if(domingo == 1 || weekday == 6)
        {
            contador++;
        }
    }
}
console.log(`Contador de dias inuteis = ${contador}`);



