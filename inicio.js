// inicio.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('usuarios')) || [];

  const foundUser = users.find(user => user.username === username && user.password === password);

  if (foundUser) {
    alert('Inicio de sesión exitoso.');
    window.location.href = 'todolist.html';
  } else {
    alert('Usuario o contraseña incorrectos.');
  }
});
