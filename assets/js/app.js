      // Contact-form
      const buyBtns = document.querySelectorAll(".js-buy-car");
      const modal = document.querySelector(".js-modal");
      const modalContainer = document.querySelector(".js-modal-container");
      const modalClose = document.querySelector(".js-modal-close");

      const showBuyCar = () => {
        modal.classList.add("open");
      };

      const hideBuyCar = () => {
        modal.classList.remove("open");
      };

      buyBtns.forEach((buyBtn) => {
        buyBtn.addEventListener("click", showBuyCar);
      });

      modal.addEventListener("click", hideBuyCar);

      modalClose.addEventListener("click", hideBuyCar);

      modalContainer.addEventListener("click", (event) => {
        event.stopPropagation();
      });

      // Responsive mobile
      const header = document.getElementById("header");
      const mobileMenu = document.getElementById("mobile-menu");
      const headerHeight = header.clientHeight;

      mobileMenu.onclick = () => {
        const isClose = header.clientHeight === headerHeight;
        header.style.height = isClose ? "auto" : null;
      };

      // auto close when close menu
      const navItems = document.getElementById("nav").querySelectorAll("li");
      navItems.forEach((navItem) => {
        navItem.addEventListener("click", (event) => {
          const isParentMenu = navItem.querySelector(".subnav");
          if (!isParentMenu) {
            header.style.height = null;
          } else {
            event.preventDefault();
          }
        });
      });