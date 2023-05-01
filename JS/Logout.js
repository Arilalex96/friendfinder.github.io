const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', logout);

function logout() {
    localStorage.removeItem('isLoggedIn');

    window.location.href = "../HTML/Login.html"
}