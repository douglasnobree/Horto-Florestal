document.addEventListener('DOMContentLoaded', async () => {
    console.log('createPlant.js loaded');
    const form = document.getElementById('formCreateNewPlant');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const nome = formData.get('plantName');
        const especie = formData.get('platNameAlternative');
        const descricao = formData.get('plantDescription');
        const img_url = formData.get('plantUrl');

        const plant = {
            nome,
            especie,
            descricao,
            img_url,
        };
        const response = await fetch(
            'https://hortoflorestal.cactustheca.shop/plants/createNewPlant',
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
