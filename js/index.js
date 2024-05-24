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
