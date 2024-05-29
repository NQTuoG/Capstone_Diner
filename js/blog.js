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
let darkmail = document.querySelector(".footer_content input");
let darksocial = document.querySelector("footer .footer_social");


document.getElementById("moon").onclick = function () {
    darktheme.classList.toggle("dark");
    darksearch.classList.toggle("dark-search");
    darkmail.classList.toggle("dark-mail");
    darksocial.classList.toggle("dark-social");
}


// page-break
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
document.getElementById("two").onclick = function () {
    console.log(page1);
    page1.classList.remove("hiennguyenhinh");
    page1.classList.add("tocbien");
    page2.classList.remove("tocbien");
    page2.classList.add("hiennguyenhinh");
}

document.getElementById("next").onclick = function () {
    console.log(page1);
    page1.classList.remove("hiennguyenhinh");
    page1.classList.add("tocbien");
    page2.classList.remove("tocbien");
    page2.classList.add("hiennguyenhinh");
}

document.getElementById("one").onclick = function () {
    console.log(page1);

    page2.classList.remove("hiennguyenhinh");
    page2.classList.add("tocbien");
    page1.classList.remove("tocbien");
    page1.classList.add("hiennguyenhinh");
}
