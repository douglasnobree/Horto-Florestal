<<<<<<< HEAD
var menuItem = document.querySelectorAll('.item-menu'); // Seleciona todos os itens do menu e coloca em um array

// TEM QUE ARRUMAR ISSO AQUI!!
=======
var menuItem = docurment.querySelectorAll('.item-menu')
>>>>>>> f890f50a582f1312bdce04a742073246584d4509

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo') //Remove a classe ativo de todos os itens
    )
    this.classList.add('ativo') // Adiciona a classe ativo ao item clicado
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink) //não pode ter '' para n ser chamado primeiro
)

document.getElementsByClassName()