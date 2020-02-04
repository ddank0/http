// Floating Action Button
const elemsbtns = document.querySelectorAll(".fixed-action-btn");
const flatingbtns = M.FloatingActionButton.init(elemsbtns, {
    direction: "left",
    hoverEnabled: true
});

// Navbar
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger: false
});
elemensSidenav = document.querySelectorAll(".sidenav");
const instacesSidenav = M.Sidenav.init(elemensSidenav);