// registro.js
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value;

  if (!username || !password) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const passwordRegex = /^(?=.*[A-Z]).{7,14}$/;

  if (!passwordRegex.test(password)) {
    alert('La contraseña debe tener al menos una letra mayúscula y tener entre 7 y 14 caracteres.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('usuarios')) || [];

  const userExists = users.find(user => user.username === username);

  if (userExists) {
    alert('Este usuario ya está registrado. Intenta con otro.');
    return;
  }

  users.push({ username, password });

  localStorage.setItem('usuarios', JSON.stringify(users));

  alert('Registro exitoso. Ahora puedes iniciar sesión.');
  window.location.href = 'inicio.html';
});
