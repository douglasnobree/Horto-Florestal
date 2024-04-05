document.addEventListener('DOMContentLoaded', async () => {
    const divPlantas = document.getElementById('boxPlants');
    console.log('oi');
    try {
        const response = await fetch(
            'https://hortoflorestal-nestjs.onrender.com/plants/allPlants'
        );
        // const response = await fetch('http://159.112.182.217:3333/plants/listAllPlants');

        if (!response.ok) {
            throw new Error('Erro ao obter os dados do servidor');
        }

        const data = await response.json();
        console.log(data);

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
                        `https://hortoflorestal-nestjs.onrender.com/plants/deletePlant?id=${planta.id}`,
                        {
                            method: 'DELETE',
                        }
                    );
                    //     `http://159.112.182.217:3333/plants/deletePlant?id=${planta.id}`,
                    //     {
                    //         method: 'DELETE',
                    //     }
                    // );

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
