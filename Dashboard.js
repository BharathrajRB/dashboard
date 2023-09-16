const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main');
var userMenu = document.querySelector('.usermenu');
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-closed');
  mainContent.classList.toggle('main-content');
});

function toggleUserMenu() {
  userMenu.classList.toggle('active');
}