// Magic Social Share Menu Logic
const toggleBtn = document.getElementById('toggleBtn');
const magicMenu = document.getElementById('magicMenu');

toggleBtn.addEventListener('click', () => {
    magicMenu.classList.toggle('active');
});

// Animated Navbar Logic
const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));