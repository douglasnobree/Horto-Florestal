document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    const response = await fetch(
        'https://backend.cactustheca.shop/auth/verifyToken',
        {   
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    if (response.status === 201) {
        console.log('Token válido');
    } else {
        alert('Token inválido');
        window.location.href = '/';
    }
});