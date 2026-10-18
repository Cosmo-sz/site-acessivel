 // Funções de acessibilidade
let tamanhoFonte = 100;
let tamanhoMain = 800;
let main = document.querySelector("main")

function aumentarFonte() 
{
        if (tamanhoFonte < 150) 
        {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        }
}

function diminuirFonte() 
{
        if (tamanhoFonte > 80) 
        {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        }  
}


function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}
