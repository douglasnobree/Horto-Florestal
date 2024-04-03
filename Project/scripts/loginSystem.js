document.addEventListener('DOMContentLoaded', async () => {
    console.log('user: admin, password: admin123');
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const username = formData.get('username');
        const password = formData.get('password');

        const response = await fetch(
            'https://hortoflorestal-nestjs.onrender.com/users/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            }
        );
        const data = await response.json();
        const token = data.token;
        if (response.status === 200) {
            alert('Login realizado com sucesso!');
            localStorage.setItem('token', token);
            window.location.href = '/Project/pages/admin/adminPage.html';
        } else {
            alert('Usuário ou senha inválidos');
        }
    });
});
