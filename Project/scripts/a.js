document.addEventListener('DOMContentLoaded', async () => {
    const divPlantas = document.getElementById('plantas');

    try {
        // Fazendo a requisição ao servidor
        const response = await fetch('http://localhost:3333/');

        if (!response.ok) {
            throw new Error('Erro ao obter os dados do servidor');
        }

        const data = await response.json(); // Convertendo a resposta para JSON

        // Manipulando os dados recebidos
        data.forEach((planta) => {
            const div = document.createElement('div');
            div.classList.add('planta');
            const imagem = document.createElement('div'); // div imagem
            imagem.classList.add('imagem');
            const descricao = document.createElement('div'); // div descricao
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
        // Tratar o erro, se necessário
    }
});
