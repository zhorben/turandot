window.addEventListener("load", (event) => {
  // **** NAV MENU ****

  let menuTimeoutIDs = [];

  const sublinks = document.querySelectorAll(".submenu");

  sublinks.forEach((link) => {
    link.addEventListener("mouseenter", (event) => {
      menuTimeoutIDs.forEach(window.clearTimeout);
      sublinks.forEach((link) => link.classList.remove("open"));
      event.target.classList.add("open");
    });

    link.addEventListener("mouseleave", (event) => {
      const isMenuLink = event.relatedTarget.classList.contains("menu-link");

      if (isMenuLink && event.relatedTarget.getAttribute("href")) {
        return event.target.classList.remove("open");
      }

      const timeoutID = setTimeout(() => {
        event.target.classList.remove("open");
      }, 1000);

      menuTimeoutIDs.push(timeoutID);
    });
  });

  document.querySelector(".burger").addEventListener("click", (event) => {
    document.body.classList.toggle("open");
    document.querySelector(".burger").classList.toggle("is-active")
  });
});

