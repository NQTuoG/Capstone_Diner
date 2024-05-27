//Menu xổ xuống
const getElement = (selector) => {
    return document.querySelector(selector);
}

getElement(".header_navbar").addEventListener("click", () => {
    const headerMenu = getElement(".header_menu");
    if (headerMenu.classList == "header_menu hide") {
        headerMenu.classList = "header_menu show";
    } else {
        headerMenu.classList = "header_menu hide";
    }
    const headerNav = getElement(".header_navbar");
    if (headerNav.classList == "header_navbar hide") {
        headerNav.classList = "header_navbar show";
    } else {
        headerNav.classList = "header_navbar hide";
    }
})

//DarkTheme
let darktheme = document.querySelector("body");
let darksearch = document.querySelector(".header_right input");
console.log(darksearch);
let darkmail = document.querySelector(".footer_content input");
console.log(darkmail);
document.getElementById("moon").onclick = function () {
    darktheme.classList.toggle("dark");
    darksearch.classList.toggle("dark-search");
    darkmail.classList.toggle("dark-mail");
}
