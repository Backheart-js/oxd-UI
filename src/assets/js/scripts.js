const sidebar = document.querySelector("#sidebar");
const closeSidebarClose = document.querySelector(".sidebar__mobileClose-btn");
const openSidebarBtn = document.querySelector(".header__mobileMenu-btn");

openSidebarBtn.addEventListener('click', () => {
    sidebar.classList.add("show")
})

closeSidebarClose.addEventListener('click', () => {
    sidebar.classList.remove("show")
})

// Click outside of sidebar
document.addEventListener("click", (e) => {
    const checkIsSidebar = e.target.closest('.sidebar') || e.target.closest('.header__mobileMenu-btn');
    if (!checkIsSidebar) {
        sidebar.classList.remove("show")
    }
})