document.addEventListener('DOMContentLoaded', function () {
    var menuItem = document.querySelectorAll('.item-menu');
    console.log(menuItem);

    const selectLink = (event) => {
        menuItem.forEach((item) =>
            item.classList.remove('ativo') // Remove a classe ativo de todos os itens
            
        );
        console.log(event.currentTarget);
        event.currentTarget.classList.add('ativo'); // Adiciona a classe ativo ao item clicado
    };

    menuItem.forEach((item) =>
        item.addEventListener('mousedown', selectLink) // Agora usa uma função de flecha para manter o contexto correto
    );
});
