document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        document.getElementById('message').innerText = 'Cadastro realizado com sucesso!';
        
        console.log('Nome:', name);
        console.log('E-mail:', email);
        console.log('Senha:', password);
    } else {
        document.getElementById('message').innerText = 'Por favor, preencha todos os campos.';
    }
});
