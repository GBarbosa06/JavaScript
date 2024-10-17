'use strict';

const trocar = document.querySelector('.btn');

trocar.addEventListener('click', function()
    {
        document.body.classList.toggle('tema-claro');
        document.body.classList.toggle('tema-escuro');
    }
)