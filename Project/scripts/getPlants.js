document.addEventListener('DOMContentLoaded', async () => {
    const divPlantas = document.getElementById('plantas');
    const clickedPlant = document.getElementById('plantaClicada');

    try {
        const response = await fetch(
            'https://backend.cactustheca.shop/plants/listAllPlants'
        );
        // const response = await fetch('http://localhost:3333/plants/allPlants');

        if (!response.ok) {
            throw new Error('Erro ao obter os dados do servidor');
        }

        const data = await response.json();
        console.log(data);

        data.forEach((planta) => {
            const div = document.createElement('div');
            div.classList.add('planta');
            div.dataset.plantID = planta.id;
            const imagem = document.createElement('div');
            imagem.classList.add('imagem');
            const descricao = document.createElement('div');
            descricao.classList.add('descricao');

            descricao.innerHTML = `
                <h2>${planta.nome}</h2>
                <p>${planta.descricao}</p>
            `;
            imagem.innerHTML = `
                <img src="${planta.img_url}" alt="${planta.nome}">
            `;
            div.appendChild(imagem);
            div.appendChild(descricao);
            divPlantas.appendChild(div);
        });

        // Adiciona evento de click em cada planta para expandir informações
        const plantas = document.querySelectorAll('.planta');
        plantas.forEach((planta) => {
            planta.addEventListener('click', async () => {
                const plantID = planta.dataset.plantID;
                const responsePlant = await fetch(
                    'https://backend.cactustheca.shop/plants/listPlantByID?id=' + plantID
                );
                const jsonPlant = await responsePlant.json();
                console.log(jsonPlant);

                const plantaClicadaPage = document.createElement('div');
                plantaClicadaPage.classList.add('plantaClicadaPage');

                const plantaImg = document.createElement('div');
                plantaImg.classList.add('planta-img');
                const img = document.createElement('img');
                img.src = jsonPlant.img_url;
                img.alt = 'Imagem da planta';
                plantaImg.appendChild(img);

                const plantaInfo = document.createElement('div');
                plantaInfo.classList.add('planta-info');
                const h2 = document.createElement('h2');
                h2.textContent = jsonPlant.nome;
                const nomeCientifico = document.createElement('p');
                nomeCientifico.innerHTML = `<strong>Nome Científico:</strong> ${jsonPlant.especie}`;
                const descricao = document.createElement('p');
                descricao.innerHTML = `<strong>Descrição:</strong> ${jsonPlant.descricao}`;
                const localizacao = document.createElement('p');
                localizacao.innerHTML = `<strong>Localização:</strong> ${jsonPlant.localizacao}`;
                const epocaFloracao = document.createElement('p');
                epocaFloracao.innerHTML = `<strong>Época de Floração:</strong> ${jsonPlant.floracao}`;
                const curiosidades = document.createElement('p');
                curiosidades.innerHTML = `<strong>Curiosidades:</strong> ${jsonPlant.curiosidades}`;

                plantaInfo.appendChild(h2);
                plantaInfo.appendChild(nomeCientifico);
                plantaInfo.appendChild(descricao);
                plantaInfo.appendChild(localizacao);
                plantaInfo.appendChild(epocaFloracao);
                plantaInfo.appendChild(curiosidades);

                plantaClicadaPage.appendChild(plantaImg);
                plantaClicadaPage.appendChild(plantaInfo);

                clickedPlant.innerHTML = '';
                clickedPlant.appendChild(plantaClicadaPage);

                divPlantas.classList.add('hidePage');
                clickedPlant.classList.remove('hidePage');
            });
        });
    } catch (error) {
        console.error('Erro ao obter/plantar plantas:', error);
    }
});
