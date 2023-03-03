const sidebar = document.querySelector("#sidebar");
const closeSidebarClose = document.querySelector(".sidebar__mobileClose-btn");
const openSidebarBtn = document.querySelector(".header__mobileMenu-btn");

openSidebarBtn.addEventListener('click', () => {
    sidebar.classList.add("show")
})

closeSidebarClose.addEventListener('click', () => {
    sidebar.classList.remove("show")
})