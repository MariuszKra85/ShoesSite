const togglemenu = () => {
  let menu = document.querySelector(".nav-list");
  let toggler = document.querySelector("#menu");
  toggler.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
};
togglemenu();
