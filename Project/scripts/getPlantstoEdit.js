document.addEventListener('DOMContentLoaded', async () => {
    const divPlantas = document.getElementById('boxPlants');
    console.log('oi');
    try {
        const response = await fetch(
            'https://backend.cactustheca.shop/plants/listAllPlants'
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
            btnDelete.textContent = 'Edit'; 
            btnDelete.classList.add('btnEdit');
            btnDelete.addEventListener('click', async () => {
                try {
                    window.location.href = `/Project/pages/admin/editPlants.html?id=${planta.id}`;
                    
                } catch (error) {
                    console.error('Erro ao direcionar pagina:', error);
                    
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
