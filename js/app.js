// Simpan data user di localStorage
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      alert('Email sudah terdaftar!');
      return;
    }

    users.push({ name, email, password, points: 50 }); // Bonus 50 poin
    localStorage.setItem('users', JSON.stringify(users));
    alert('Pendaftaran berhasil! Bonus 50 poin ditambahkan.');
    window.location.href = 'login.html';
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@etpid.com' && password === 'admin123') {
      alert('Login Admin Berhasil');
      window.location.href = 'admin/dashboard.html';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Login berhasil');
      window.location.href = 'index.html';
    } else {
      alert('Email atau password salah!');
    }
  });
}
