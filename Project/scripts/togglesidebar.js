function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("button").classList.add('hide');
    console.log("Abacaxi")
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    setTimeout(function() {
        document.getElementById("button").classList.remove('hide');
    }, 200); // Atraso de milisegundos para o button da sidebar
}

document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    ['body', 'header', 'sidebar', 'openbtn'].forEach(function (elementId) {
        document.querySelector(elementId).classList.toggle('dark-mode');
    });
});