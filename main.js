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

// Modal
const elemsModal = document.querySelectorAll(".modal");
const instancesModal = M.Modal.init(elemsModal);

// Tooltip
const elemsTooltip = document.querySelectorAll(".tooltipped");
const instaceTooltpi = M.Tooltip.init(elemsTooltip,{
    html: "olha essa dica!",
    position: "bottom"
});

// Toast
const elemnsToast = document.querySelector("#Toast");
const instanceToast = () => {
    M.toast( {
        html: "Também sou uma notificação",
        classes: "rounded "
    })
}

elemnsToast.addEventListener("click", () => {
    instanceToast();
});