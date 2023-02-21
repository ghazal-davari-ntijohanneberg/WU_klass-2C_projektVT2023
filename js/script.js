const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function toggleMenu() {
    linkList.classList.toggle('link_list_visible')
    burger.classList.toggle('burger_in_x_form')
}


burger.addEventListener('click', toggleMenu)