document.addEventListener('DOMContentLoaded', async () => {
    console.log('createPlant.js loaded');
    const form = document.getElementById('formCreateNewPlant');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const nome = formData.get('plantName');
        const especie = formData.get('plantSpecies');
        const descricao = formData.get('plantDescription');
        const img_url = formData.get('img_url');
        const localizacao = formData.get('localizacao');
        const floracao = formData.get('floracao');
        const curiosidades = formData.get('curiosidades');
        const cuidados = formData.get('cuidados');
        const rega = formData.get('rega');

        const plant = {
            nome,
            especie,
            descricao,
            img_url,
            localizacao,
            floracao,
            curiosidades,
            cuidados,
            rega,
        };
        const response = await fetch(
            'https://backend.cactustheca.shop/plants/createNewPlant',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(plant),
            }
        );
        if (response.status === 201) {
            alert('Planta cadastrada com sucesso!');
        } else {
            alert('Erro ao cadastrar planta');
        }
    });
});
