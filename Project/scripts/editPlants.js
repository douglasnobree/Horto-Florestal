document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const plantID = urlParams.get('id');
    const divPlantas = document.getElementById('boxPlants');
    const selectedPlant = document.getElementById('selectedPlant');
    console.log(plantID);

    if (plantID) {
        divPlantas.classList.add('hidePage');
        selectedPlant.classList.remove('hidePage');
        const form = document.getElementById('formEditPlant');

        const response = await fetch(
            `https://backend.cactustheca.shop/plants/listPlantByID?id=${plantID}`
        );
        const jsonPlant = await response.json();

        form.plantID.value = plantID;
        form.plantName.value = jsonPlant.nome;
        form.plantSpecies.value = jsonPlant.especie;
        form.plantDescription.value = jsonPlant.descricao;
        form.plantImageUrl.value = jsonPlant.img_url;
        form.plantLocation.value = jsonPlant.localizacao;
        form.plantFlowering.value = jsonPlant.floracao;
        form.plantCuriosities.value = jsonPlant.curiosidades;
        form.plantCare.value = jsonPlant.cuidados;
        form.plantWatering.value = jsonPlant.rega;
        form.frutifera.checked = jsonPlant.frutifera;
        form.medicinal.checked = jsonPlant.medicinal;
        form.ornamental.checked = jsonPlant.ornamental;
        form.tipo.value = jsonPlant.tipo;
        form.utilidade.value = jsonPlant.utilidade;

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

            const plantIDNumber = parseInt(plantID);
            const plant = {
                id: plantIDNumber,
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
                'https://backend.cactustheca.shop/plants/editPlant',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(plant),
                }
            );
            if (response.status === 201) {
                alert('Planta Editada com sucesso!');
            } else {
                alert('Erro ao editar planta');
            }
        });
    }
});
