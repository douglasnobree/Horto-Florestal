document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const plantID = urlParams.get('id');
    const divPlantas = document.getElementById('plantas');
    const clickedPlant = document.getElementById('plantaClicada');
    
    if(plantID) {
        divPlantas.classList.add('hidePage');
        clickedPlant.classList.remove('hidePage');

        const responsePlant = await fetch(
            `https://backend.cactustheca.shop/plants/listPlantByID?id=${plantID}`
        );
        const jsonPlant = await responsePlant.json();
        const plantaClicadaPage = document.createElement('div');
        plantaClicadaPage.classList.add('plantaClicadaPage');

        const plantaImg = document.createElement('div');
        plantaImg.classList.add('planta-img');
        const img = document.createElement('img');
        img.src = jsonPlant.img_url;
        img.alt = 'Imagem da planta';
        img.classList.add('img-plant');
        plantaImg.appendChild(img);

        const plantaInfo = document.createElement('div');
        plantaInfo.classList.add('planta-info');
        const h2 = document.createElement('h2');
        h2.textContent = jsonPlant.nome;
        const especie = document.createElement('p');
        especie.innerHTML = `<strong>Espécie:</strong> <i>${jsonPlant.especie}</i>`;
        const descricao = document.createElement('p');
        descricao.innerHTML = `<strong>Utilidade:</strong> ${jsonPlant.descricao}`;
        const localizacao = document.createElement('p');
        localizacao.innerHTML = `<strong>Localização:</strong> ${jsonPlant.localizacao || 'N/A'}`;
        const floracao = document.createElement('p');
        floracao.innerHTML = `<strong>Época de Floração:</strong> ${jsonPlant.floracao || 'N/A'}`;
        const curiosidades = document.createElement('p');
        curiosidades.innerHTML = `<strong>Curiosidades:</strong> ${jsonPlant.curiosidades || 'N/A'}`;
        const cuidados = document.createElement('p');
        cuidados.innerHTML = `<strong>Forma de propagação:</strong> ${jsonPlant.cuidados || 'N/A'}`;
        const rega = document.createElement('p');
        rega.innerHTML = `<strong>Rega:</strong> ${jsonPlant.rega || 'N/A'}`;

        plantaInfo.appendChild(h2);
        plantaInfo.appendChild(especie);
        plantaInfo.appendChild(descricao);
        plantaInfo.appendChild(localizacao);
        plantaInfo.appendChild(floracao);
        plantaInfo.appendChild(curiosidades);
        plantaInfo.appendChild(cuidados);
        plantaInfo.appendChild(rega);

        plantaClicadaPage.appendChild(plantaImg);
        plantaClicadaPage.appendChild(plantaInfo);

        clickedPlant.innerHTML = '';
        clickedPlant.appendChild(plantaClicadaPage);
}
});

