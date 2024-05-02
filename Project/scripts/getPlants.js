document.addEventListener('DOMContentLoaded', async () => {
    const divPlantas = document.getElementById('plantas');

    try {
        const response = await fetch(
            'https://backend.cactustheca.shop/plants/listAllPlants'
        );
        // const response = await fetch('http://localhost:3333/plants/listAllPlants');

        if (!response.ok) {
            throw new Error('Erro ao obter os dados do servidor');
        }

        const data = await response.json();

        data.forEach((planta) => {
            const containerCard = document.createElement('div');
            containerCard.classList.add('containerCard');
        
            const flipCard = document.createElement('div');
            flipCard.classList.add('flip-card');
        
            const flipCardInner = document.createElement('div');
            flipCardInner.classList.add('flip-card-inner');
        
            const flipCardFront = document.createElement('div');
            flipCardFront.classList.add('flip-card-front');
        
            const flipCardBack = document.createElement('div');
            flipCardBack.classList.add('flip-card-back');
        
            const imagem = document.createElement('div');
            imagem.classList.add('imagem');
            const descricao = document.createElement('div');
            descricao.classList.add('descricao');
        
            const flipCardImage = document.createElement('img');
            flipCardImage.classList.add('flip-card-image');
            flipCardImage.src = planta.img_url;
            flipCardImage.alt = planta.nome;
        
            const descricaoTitulo = document.createElement('h2');
            descricaoTitulo.textContent = planta.nome;
        
            const descricaoTexto = document.createElement('p');
            const formatedDescription = planta.descricao.slice(0, 90);
            descricaoTexto.textContent = formatedDescription + (planta.descricao.length > 90 ? '...' : '');

            
        
            const infos = document.createElement('div');
            infos.classList.add('infos');
        
            const nomeCientifico = document.createElement('p');
            nomeCientifico.innerHTML = `<strong>Nome científico:</strong> <i><span>${planta.especie}</span></i>`;
        
            const usoMedicinal = document.createElement('p');
            usoMedicinal.innerHTML = `<strong>Uso medicinal:</strong> <span>${planta.medicinal ? 'Sim' : 'Não'}</span>`;
        
            const descricaoCompleta = document.createElement('p');
            const descricaoCompletaBack = planta.descricao.slice(0, 150);
            descricaoCompleta.innerHTML = `<strong>Utilidade:</strong> <span>${descricaoCompletaBack}${planta.descricao.length > 150 ? '...' : ''}</span>`;

            const divTags = document.createElement('div');
            divTags.classList.add('tagsTypes');
            if(planta.medicinal) {
                const tagMedicinal = document.createElement('img');
                tagMedicinal.classList.add('tagIMG');
                tagMedicinal.src = '../imgs/medicine.svg';
                divTags.appendChild(tagMedicinal);
            }if(planta.ornamental) {
                const tagOrnamental = document.createElement('img');
                tagOrnamental.classList.add('tagIMG');
                tagOrnamental.src = '../imgs/ornamental.svg';
                divTags.appendChild(tagOrnamental);
            }if(planta.frutifera) {
                const tagComestivel = document.createElement('img');
                tagComestivel.classList.add('tagIMG');
                tagComestivel.src = '../imgs/berry.svg';
                divTags.appendChild(tagComestivel);
            }
            
        
            const button = document.createElement('button');
            button.classList.add('buttonFlip');
            button.textContent = 'Ver mais informações';

        
            flipCardFront.appendChild(imagem);
            flipCardFront.appendChild(descricao);
            imagem.appendChild(flipCardImage);
            descricao.appendChild(descricaoTitulo);
            descricao.appendChild(descricaoTexto);
        
            flipCardBack.appendChild(infos);
            infos.appendChild(descricaoTitulo.cloneNode(true));
            infos.appendChild(nomeCientifico);
            infos.appendChild(usoMedicinal);
            infos.appendChild(descricaoCompleta);
            infos.appendChild(divTags);
            flipCardBack.appendChild(button);
        
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
            containerCard.appendChild(flipCard);
        
            divPlantas.appendChild(containerCard);
        
            button.addEventListener('click', () => {
                window.location.href = `/Project/pages/listAllPlants.html?id=${planta.id}`;
            });
        });
        

        // Adiciona evento de click em cada planta para expandir informações
        const plantas = document.querySelectorAll('.planta');
        plantas.forEach((planta) => {
            planta.addEventListener('click', async () => {
                const plantID = planta.dataset.plantID;
                window.location.href = `/Project/pages/listAllPlants.html?id=${plantID}`;
            });
        });
        
    } catch (error) {
        console.error('Erro ao obter plantas:', error);
    }
});
