document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const username = formData.get('username');
        const password = formData.get('password');

        const response = await fetch(
            'https://backend.cactustheca.shop/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            }
        );
        console.log(response);
        const data = await response.json();
        const token = data.token;
        if (response.status === 201) {
            localStorage.setItem('token', token);
            window.location.href = '/Project/pages/admin/adminPage.html';
        } else {
            alert('Usuário ou senha inválidos');
        }
    });
});
