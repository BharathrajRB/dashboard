const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main');
var userMenu = document.querySelector('.user-menu');
const navmenu = document.querySelector('.menu-iconnav');
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-closed');
  mainContent.classList.toggle('main-content');
});
navmenu.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-closed');
  mainContent.classList.toggle('main-content');
});

function toggleUserMenu() {
  userMenu.classList.toggle('active');
}
function toggleUserMenu1() {
  var userMenu = document.getElementById("user-Menu-one");
  if (userMenu.style.display === "block") {
    userMenu.style.display = "none";
  } else {
    userMenu.style.display = "block";
  }
}