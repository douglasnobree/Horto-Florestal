document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
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
        const frutiferaValue = formData.get('frutifera');
        const medicinalValue = formData.get('medicinal');
        const ornamentalValue = formData.get('ornamental');
        const tipo = formData.get('tipo');
        const utilidade = formData.get('utilidade');

        const frutifera = frutiferaValue === 'on';
        const medicinal = medicinalValue === 'on';
        const ornamental = ornamentalValue === 'on';

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
            frutifera,
            medicinal,
            ornamental,
            tipo,
            utilidade,
        };

        const response = await fetch(
            'https://backend.cactustheca.shop/plants/createNewPlant',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
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
