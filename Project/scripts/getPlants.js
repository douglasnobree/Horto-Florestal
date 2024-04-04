document.addEventListener('DOMContentLoaded', async () => {
    const divPlantas = document.getElementById('plantas');

    try {
        const response = await fetch(
            'https://hortoflorestal-nestjs.onrender.com/plants/listAllPlants'
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
    } catch (error) {
        console.error('Erro ao obter/plantar plantas:', error);
    }
});
