getElement(".header__navbar").addEventListener("click", () => {
    const headerMenu = getElement(".header__menu");
    if (headerMenu.classList == "header__menu hide") {
        headerMenu.classList = "header__menu show";
    } else {
        headerMenu.classList = "header__menu hide";
    }
    const headerLogo = getElement(".header__logo");
    if (headerLogo.classList == "header__logo hide") {
        headerLogo.classList = "header__logo show";
    } else {
        headerLogo.classList = "header__logo hide";
    }
    const headerNav = getElement(".header__navbar");
    if (headerNav.classList == "header__navbar hide") {
        headerNav.classList = "header__navbar show";
    } else {
        headerNav.classList = "header__navbar hide";
    }
})