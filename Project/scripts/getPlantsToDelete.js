document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    const divPlantas = document.getElementById('boxPlants');
    try {
        const response = await fetch(
            'https://backend.cactustheca.shop/plants/listAllPlants'
        );
        // const response = await fetch('http://159.112.182.217:3333/plants/listAllPlants');

        if (!response.ok) {
            throw new Error('Erro ao obter os dados do servidor');
        }

        const data = await response.json();

        data.forEach((planta) => {
            const PlantaDiv = document.createElement('div');
            PlantaDiv.classList.add('Plant');

            const spanID = document.createElement('span');
            spanID.innerHTML = `ID:`;

            const idPlanta = document.createElement('div');
            idPlanta.classList.add('ID');
            idPlanta.textContent = planta.id;

            const spanNome = document.createElement('span');
            spanNome.innerHTML = `Nome:`;

            const nomePlanta = document.createElement('div');
            nomePlanta.classList.add('Nome');
            nomePlanta.textContent = planta.nome;

            const btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';
            btnDelete.classList.add('btnDelete');
            btnDelete.addEventListener('click', async () => {
                try {
                    const response = await fetch(
                        `https://backend.cactustheca.shop/plants/deletePlant?id=${planta.id}`,
                        {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    if (!response.ok) {
                        throw new Error('Erro ao deletar a planta');
                    }

                    PlantaDiv.remove();
                } catch (error) {
                    console.error('Erro ao deletar a planta:', error);
                }
            });

            PlantaDiv.appendChild(spanID);
            PlantaDiv.appendChild(idPlanta);
            PlantaDiv.appendChild(spanNome);
            PlantaDiv.appendChild(nomePlanta);
            PlantaDiv.appendChild(btnDelete);

            divPlantas.appendChild(PlantaDiv);
        });
    } catch (error) {
        console.error('Erro ao obter/plantar plantas:', error);
    }
});
