let windowWidth = window.innerWidth;
window.onresize = () => {
  windowWidth = window.innerWidth;
  // if (windowWidth <= 502 && windowWidth >= 499) window.location.reload();
  if (windowWidth <= 768 && windowWidth >= 767) window.location.reload();
  if (windowWidth >= 769 && windowWidth <= 770) window.location.reload();
  if (windowWidth >= 991 && windowWidth <= 994) window.location.reload();
};

// Control container and container fluid
const containers = document.querySelectorAll(".container");
if (windowWidth <= 992) {
  containers.forEach((container) => {
    // if (!container.classList.contains("accordion-container")) {
    container.classList.add("container-fluid");
    const containerFluid = document.querySelector(".container-fluid.container");
    containerFluid.classList.remove("container");
    // }
  });
} else if (windowWidth > 992) {
  const containersFluid = document.querySelectorAll(".container-fluid");
  containersFluid.forEach((containerFluid) => {
    if (
      !containerFluid.classList.contains("footer-container") &&
      !containerFluid.classList.contains("breaking-news-container") &&
      !containerFluid.classList.contains("dashboard-page")
    ) {
      containerFluid.classList.add("container");
      const container = document.querySelector(".container.container-fluid");
      container.classList.remove("container-fluid");
    }
  });
}
// Handle popus showing
const popups = document.querySelectorAll(".popup");
const popupsClose = document.querySelectorAll(".popup .popup-close");
const overlay = document.querySelector(".overlay");
const myDrops = document.querySelectorAll(".my-drop");

if (myDrops) {
  myDrops.forEach((myDrop) => {
    const theDrop = document.querySelector(`.${myDrop.classList[1]}`);
    const theDropSelected = document.querySelector(`.${myDrop.classList[1]}`);
    const myDropList = document.querySelector(
      `.${myDrop.classList[1]} .menu-items`
    );
    const selectedItem = document.querySelector(
      `.${myDrop.classList[1]} .selected-item`
    );
    const menuItems = document.querySelectorAll(
      `.${myDrop.classList[1]} .menu-items li`
    );
    myDrop.addEventListener("click", () => {
      myDrop.classList.toggle("active");
    });
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        // if (!myDropList.classList.contains("langs")) {
        // console.log("object");
        selectedItem.innerHTML = item.innerHTML;
        // }
      });
    });
  });
}
// popupsClose.forEach((closeBtn)=> {

// })
function handlePopupShowing(currentPopupClass) {
  popups.forEach((popup) => popup.classList.remove("show"));
  const currentPopup = document.querySelector(`${currentPopupClass}`);
  const popupClose = document.querySelector(
    `${currentPopupClass} .popup-close`
  );
  const canclePopupBtn = document.querySelector(
    `${currentPopupClass} .cancle-popup`
  );
  const backToTickets = document.querySelector(
    `${currentPopupClass} .back-to-tickets-btn`
  );
  if (currentPopup.classList.contains("result-popup")) {
    setTimeout(() => {
      currentPopup.classList.remove("show");
      overlay.classList.remove("show");
    }, 2000);
  }
  overlay.classList.add("show");
  currentPopup.classList.add("show");
  if (popupClose) {
    popupClose.addEventListener("click", () => {
      currentPopup.classList.remove("show");
      overlay.classList.remove("show");
    });
  }
  if (canclePopupBtn) {
    canclePopupBtn.addEventListener("click", () => {
      currentPopup.classList.remove("show");
      overlay.classList.remove("show");
    });
  }
  if (backToTickets) {
    backToTickets.addEventListener("click", () => {
      currentPopup.classList.remove("show");
      overlay.classList.remove("show");
    });
  }

  if (currentPopup.classList.contains("show")) {
    document.documentElement.scrollTop = 150;
  }
}

// Dropdown and select language
const dropdown = document.querySelector(".my-drop");
const selectedLang = document.querySelectorAll(
  ".my-drop .selected .selected-lang"
);
const langs = document.querySelectorAll(".my-drop .langs li");

langs.forEach((lang) => {
  lang.addEventListener("click", () => {
    selectedLang.forEach((item) => (item.innerHTML = lang.innerHTML));
  });
});
// handle class acrive for listnumbers

const listnumbers = document.querySelector(
  ".product-details-page .make-number .numbers-list"
);
const numbers = document.querySelectorAll(
  ".product-details-page .make-number .numbers-list li"
);
numbers.forEach((number) =>
  number.addEventListener("click", () => {
    numbers.forEach((number) => number.classList.remove("active"));
    number.classList.add("active");
  })
);
// Control Menu navigation
const menu = document.querySelector(".main-nav .menu");
const openMenu = document.querySelector(".main-nav .menu .open");
const closeMenu = document.querySelector(".main-nav .menu .close");
const menuContent = document.querySelector(".main-nav .menu-content");

menu.addEventListener("click", () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  menuContent.classList.toggle("active");
});
// Get current year for copyright
const copyrightYear = document.querySelectorAll(".copyright");
let currentYear = new Date().getFullYear();
copyrightYear.forEach((item) => (item.innerHTML = currentYear));

// Toggle Registeration Methods showings
const signUpBtn = document.querySelector(".auth .sign-up-btn");
const registerMethods = document.querySelector(".auth .registeration-methods");
const registerMenu = document.querySelector(".register-menu");
const slider = document.querySelector(".swiper");
const sliderSlides = document.querySelectorAll(".swiper-slide");
const verticalImage = document.querySelector(".swiper .vertical");
const horizontalImage = document.querySelector(".swiper .horizontal");
const achiveGoalsLinks = document.querySelector(".achive-goals .links");
const productsLinks = document.querySelector(".achive-goals .products-links");

console.log(windowWidth);
if (registerMenu && registerMethods) {
  // if (windowWidth > 767 && registerMenu.classList.contains("hidden")) {
  //   productsLinks.classList.remove("show");
  // } else if (windowWidth < 767 && productsLinks.classList.contains("show")) {
  //   registerMethods.classList.remove("show");
  // }
  signUpBtn.addEventListener("click", () => {
    windowWidth > 767
      ? registerMethods.classList.toggle("show")
      : registerMenu.classList.toggle("show");
  });
}

window.addEventListener("click", (e) => {
  if (
    !e.target.matches(".sign-up-btn") &&
    !e.target.matches(".auth .registeration-methods div") &&
    !e.target.matches(".auth .registeration-methods div span") &&
    !e.target.matches(".auth .registeration-methods div svg ") &&
    !e.target.matches(".register-menu header") &&
    !e.target.matches(".register-menu header span") &&
    !e.target.matches(".register-menu .registeration-methods") &&
    !e.target.matches(".register-menu .registeration-methods div") &&
    !e.target.matches(".register-menu .registeration-methods div span") &&
    !e.target.matches(".register-menu .registeration-methods div svg")
  ) {
    registerMethods.classList.remove("show");
    registerMenu.classList.remove("show");
  }
});

////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////

// Footer
// Click to go to top
const toTop = document.querySelector("footer .click-to-top");
toTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
// handle footer all-links dropdown
const allLinksSmall = document.querySelector(".all-links-small");
const allLinksSmallItems = document.querySelectorAll(
  ".all-links-small .item .header"
);
const allLinksUls = document.querySelectorAll(".all-links-small .item ul");
const allLinksIcons = document.querySelectorAll(
  ".all-links-small .item .icons"
);

if (allLinksSmall && allLinksSmallItems) {
  allLinksSmallItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Toggle hidden class on icons
      const minusIcon = document.querySelector(
        `.all-links-small .item #${item.id} .fa-minus`
      );
      const plusIcon = document.querySelector(
        `.all-links-small .item #${item.id} .fa-plus`
      );
      plusIcon.classList.toggle("hidden");
      minusIcon.classList.toggle("hidden");

      // Toggle show class on ul
      allLinksUls.forEach((link) => {
        if (link.dataset.target === item.id) {
          link.classList.toggle("show");
        }
      });
    });
  });
}

// initialize owl carsousel
const homePage = document.querySelector(".home-page");
const productsPage = document.querySelector(".products-page");
const blogPage = document.querySelector(".blog-page");
const blogDetailsPage = document.querySelector(".blog-details-page");
const contactUsPage = document.querySelector(".contact-us-page");
const affiliatePage = document.querySelector(".affiliate-page");
const whoWeArePage = document.querySelector(".who-we-are-page");
const trusAndSecurityPage = document.querySelector(".trust-and-safety-page");
const dashboardPage = document.querySelector(".dashboard-page");
const mainSlider = document.querySelector(".main-slider");
$(document).ready(function () {
  if (homePage || productsPage) {
    $("#youtube-videos-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // nav: true,
      responsive: {
        0: {
          stagePadding: 50,
          items: 1,
        },

        650: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });
    $("#social-media-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // nav: true,
      responsive: {
        0: {
          stagePadding: 50,
          items: 1,
        },

        650: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
  if (mainSlider) {
    $("#main-slider").owlCarousel({
      // loop: true,
      margin: 0,
      responsiveClass: true,
      // autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  }
  $("#testimonials-carousel").owlCarousel({
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 16,
      },
      1000: {
        items: 2,
        margin: 45,
      },
    },
  });
  if (blogPage) {
    $("#breaking-news-carousel").owlCarousel({
      loop: true,
      stagePadding: 50,
      responsiveClass: true,
      autoplayHoverPause: true,
      margin: 20,
      nav: true,
      responsive: {
        0: {
          margin: 16,
          items: 1,
        },
        768: {
          items: 1,
          stagePadding: 120,
        },
        992: {
          items: 1,
          stagePadding: 200,
        },
        1200: {
          items: 1,
          stagePadding: 300,
        },
      },
    });
  }
  if (windowWidth < 768 && blogPage) {
    $("#categories-carousel").owlCarousel({
      // loop: true,
      stagePadding: 25,
      responsiveClass: true,
      autoplayHoverPause: true,
      margin: 24,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 5,
        },
      },
    });
  }
  if (blogDetailsPage) {
    $("#recent-blogs-carousel").owlCarousel({
      responsiveClass: true,
      autoplayHoverPause: true,
      margin: 24,
      nav: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 25,
        },
        600: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
  if (contactUsPage) {
    $("#contact-us-carousel").owlCarousel({
      responsiveClass: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 25,
          margin: 16,
        },
        768: {
          items: 3,
          margin: 16,
        },
        1200: {
          items: 3,
          margin: 20,
        },
      },
    });
  }
  if (affiliatePage) {
    $("#benefits-carousel").owlCarousel({
      responsiveClass: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 25,
          margin: 16,
        },
        600: {
          items: 2,
          margin: 16,
        },
        768: {
          items: 3,
          margin: 16,
        },
        1200: {
          items: 3,
          margin: 21,
        },
      },
    });
  }
  if (whoWeArePage) {
    $("#goals-carousel").owlCarousel({
      responsiveClass: true,
      autoplayHoverPause: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 30,
          margin: 16,
        },
        600: {
          items: 3,
          margin: 16,
        },
        768: {
          items: 4,
          margin: 16,
        },
        1200: {
          items: 4,
          margin: 21,
        },
      },
    });
    $("#reasons-carousel").owlCarousel({
      responsiveClass: true,
      autoplayHoverPause: true,
      stagePadding: 30,
      margin: 15,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        780: {
          items: 4,
        },
      },
    });
  }
  if (trusAndSecurityPage || homePage) {
    $("#customers-comments-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      nav: true,
      responsive: {
        0: {
          stagePadding: 30,
          items: 1,
        },
        700: {
          stagePadding: 0,
          items: 2,
        },
        768: {
          stagePadding: 0,
          items: 3,
        },
        1000: {
          stagePadding: 0,
          items: 3,
        },
      },
    });
  }
  if (dashboardPage) {
    $("#dashboard-bar-carousel").owlCarousel({
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 3,
        },
        768: {
          stagePadding: 0,
          items: 4,
        },
        900: {
          stagePadding: 0,
          items: 5,
        },
        1000: {
          stagePadding: 0,
          items: 6,
        },
        1100: {
          stagePadding: 0,
          items: 7,
        },
      },
    });
  }
});
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================

// Start products page
const platformsDrops = document.querySelector(
  ".products-page .choose-drops .platforms-drop"
);
const platformsList = document.querySelector(
  ".products-page .choose-drops .platforms-drop ul"
);
const servicesDrops = document.querySelector(
  ".products-page .choose-drops .services-drop"
);
const servicesList = document.querySelector(
  ".products-page .choose-drops .services-drop ul"
);
const activePlatform = document.querySelector(
  ".products-page .choose-drops .platforms-drop .active"
);
const activeService = document.querySelector(
  ".products-page .choose-drops .services-drop .active"
);
const platforms = document.querySelectorAll(
  ".products-page .choose-drops .platforms-drop ul li"
);
const services = document.querySelectorAll(
  ".products-page .choose-drops .services-drop ul li"
);
function handleDropsClick(drop, dropList) {
  drop.addEventListener("click", () => {
    dropList.classList.toggle("active");
  });
}
function handleDropsActiveElement(dropList, activeElement) {
  dropList.forEach((item) => {
    item.addEventListener("click", () => {
      activeElement.innerHTML = item.innerHTML;
    });
  });
}
if (platformsDrops && servicesDrops) {
  handleDropsClick(platformsDrops, platformsList);
  handleDropsClick(servicesDrops, servicesList);
  handleDropsActiveElement(platforms, activePlatform);
  handleDropsActiveElement(services, activeService);
}

// End products page
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================

// Start payment page

const paymentPages = document.querySelectorAll(".payment-page");
const methods = document.querySelectorAll(".payment-page .methods .methods");
// const methodsSmall = document.querySelectorAll(
//   ".payment-page.small .methods.small .method"
// );
// paymentPages.forEach((page) => {
// console.log(page.className);

methods.forEach((methods) => {
  const theMethods = document.querySelectorAll(
    `.${methods.classList[1]} .method`
  );
  console.log(methods.classList[1]);
  theMethods.forEach((mth) => {
    mth.addEventListener("click", () => {
      mth.classList.toggle("active");
      theMethods.forEach((mth) => {
        let checkbox = document.querySelector(
          `.${methods.classList[1]} .${mth.classList[1]} input[type="checkbox"]`
        );
        if (mth.classList.contains("active")) {
          console.log(mth.classList[1]);
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
      });
    });
  });
});
// methodsSmall.forEach((method) => {
//   method.addEventListener("click", (e) => {
//     console.log(e.target);
//     if (e.target.localName === "input") {
//       method.classList.toggle("active");
//     }
//   });
//   console.log(method.classList.contains("active"));
//   if (method.classList.contains("active")) {
//     let checkbox = document.querySelector(
//       `.payment-page.small .methods ${method.localName} input[type="checkbox"]`
//     );
//     checkbox.checked = true;
//   }
// });

// methodsSmall.forEach((method) => {
//   method.addEventListener("click", (e) => {
//     console.log(e.target.localName);
//     if (e.target.localName === "label") {
//       method.classList.toggle("active");
//     }
//   });
//   if (method.classList.contains("active")) {
//     let checkbox = document.querySelector(
//       `.payment-page.small .methods ${method.localName} input[type="checkbox"]`
//     );
//     checkbox.checked = true;
//     console.log(checkbox);
//   }
// });
// }
// });

// if (methodsSmall) {

// }
// End payment page

// Start payment small page
const navItems = document.querySelectorAll(".payment-page .nav-tabs .nav-item");
const tabs = document.querySelectorAll(".payment-page.small > div");
if (tabs && navItems) {
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      tabs.forEach((tab) => {
        if (tab.dataset.target === item.id) {
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          tab.classList.add("active");
        }
      });
    });
  });
}

// control tabs toggle

// End payment small page

// Customize dropdown
function handleDropsClick(drop, dropList) {
  drop.addEventListener("click", () => {
    dropList.classList.toggle("active");
  });
}
function handleDropsActiveElement(dropList, activeElement) {
  dropList.forEach((item) => {
    item.addEventListener("click", () => {
      activeElement.innerHTML = item.innerHTML;
    });
  });
}
const chooseDrop = document.querySelector(".available-services .choose-drop");
const chooseList = document.querySelector(
  ".available-services .choose-drop .choose-list"
);
const chooseItems = document.querySelectorAll(
  ".available-services .choose-drop .choose-list li"
);
const choosen = document.querySelector(
  ".available-services .choose-drop .choosen span"
);
if (chooseDrop) {
  handleDropsActiveElement(chooseItems, choosen);
}

// ===================
// ===================
// ===================
// ===================
// ===================
// ===================
// ===================
let score = 4;
let progress = (score / 5) * 100; // Assuming the maximum score is 5

// handle span inner progress width
const circleProgress = document.querySelector(".circle-progress");
const allProgresses = document.querySelectorAll(".reviews .the-progress");
const allInnerProgresses = document.querySelectorAll(
  ".reviews .the-progress span"
);

if (circleProgress && allInnerProgresses) {
  circleProgress.style.strokeDasharray = `${progress}, 100`;
  allProgresses.forEach((progress) => {
    allInnerProgresses.forEach((innerProgress) => {
      if (innerProgress.id === progress.dataset.target) {
        innerProgress.style.width = `${progress.dataset.progress}`;
      }
    });
  });
}
// =====================================//
// =====================================//
// =====================================//
// =====================================//
// =====================================//
// =====================================//
// =====================================//
// =====================================//
// =====================================//
// handle terms categories buttons active
const categoriesbtns = document.querySelectorAll(
  ".terms-and-conditions-page .categories button"
);
categoriesbtns.forEach((category) => {
  category.addEventListener("click", () => category.classList.toggle("active"));
  console.log(category);
});
// Handle terms accordion
const openIcons = document.querySelectorAll(".the-terms .term .open-icon");
const closeIcons = document.querySelectorAll(".the-terms .term .close-icon");
const terms = document.querySelectorAll(".the-terms .term");

function toggleTermsOpenClose(icons, terms) {
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      terms.forEach((term) => {
        if (term.id === icon.dataset.term) {
          term.classList.toggle("active");
        }
      });
    });
  });
}
toggleTermsOpenClose(openIcons, terms); //
toggleTermsOpenClose(closeIcons, terms); //

// handle my pagination
let currentPage = 1;
const myPagination = document.querySelector(".my-pagination");
const paginationBtns = document.querySelectorAll(
  ".my-pagination button.pagination-btn"
);
const goDoubleBack = () => {
  if (currentPage > 2) {
    currentPage -= 2;
    updatePaination();
  }
};
const goDoubleNext = () => {
  if (currentPage < 9) {
    currentPage += 2;
    updatePaination();
  }
};
const goBack = () => {
  if (currentPage > 1) {
    currentPage--;
    updatePaination();
  }
};
const goNext = () => {
  if (windowWidth > 768) {
    if (currentPage < 10) {
      currentPage++;
      updatePaination();
    }
  } else {
    if (currentPage < 3) {
      currentPage++;
      updatePaination();
    }
  }
};
paginationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentPage = btn.value;
    updatePaination();
  });
});
const updatePaination = () => {
  paginationBtns.forEach((btn) => btn.classList.remove("active"));
  paginationBtns[currentPage - 1].classList.add("active");
  console.log(currentPage);
};
// Start Dashboard
if (dashboardPage) {
  const dashboardNav = document.querySelector(".dashboard-nav");
  const dashboardMenu = document.querySelector(
    ".dashboard-nav + .dashboard-menu"
  );
  const dashboardMenuOpenBtn = document.querySelector(".dashboard-nav .open");
  const dashboardMenuCloseBtn = document.querySelector(".dashboard-nav .close");
  const dashboardMenuItems = document.querySelectorAll(
    ".dashboard-nav + .dashboard-menu .the-menu li"
  );
  const dashboardBar = document.querySelector(".dashboard-bar");
  const dashboardBarItems = document.querySelectorAll(".dashboard-bar li");
  const dashboardSections = document.querySelectorAll(
    ".dashboard-page section"
  );
  const footer = document.querySelector(".footer-container");
  function toggleOpenCloseDashboadrMenu(btn) {
    btn.addEventListener("click", () => {
      dashboardMenu.classList.toggle("active");
      dashboardNav.classList.toggle("active");
    });
  }

  toggleOpenCloseDashboadrMenu(dashboardMenuOpenBtn);
  toggleOpenCloseDashboadrMenu(dashboardMenuCloseBtn);
  function toggleDashboardSectionsActive(menuItems) {
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menuItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        if (menuItems === dashboardMenuItems) {
          dashboardMenu.classList.remove("active");
          dashboardNav.classList.toggle("active");
        }
        dashboardSections.forEach((section) => {
          if (section.id === item.dataset.target) {
            dashboardSections.forEach((section) =>
              section.classList.remove("active")
            );
            section.classList.add("active");
          }
        });
      });
    });
  }
  toggleDashboardSectionsActive(dashboardMenuItems);
  toggleDashboardSectionsActive(dashboardBarItems);
}

// ==========================================
// handle pagination two
let currentValue = 1;
const paginationTwos = document.querySelectorAll(".my-pagination-two");
const paginationTwoBtns = document.querySelectorAll(
  ".my-pagination-two button"
);

paginationTwoBtns.forEach((paginate) => {
  paginate.addEventListener("click", () => {
    currentValue = paginate.value;
    changeCurrentPaginate();
  });
});
const changeCurrentPaginate = () => {
  paginationTwoBtns.forEach((paginate) => paginate.classList.remove("active"));
  console.log(paginationTwoBtns[currentValue - 1].classList.add("active"));
  console.log(paginationTwoBtns[currentValue - 1]);
};
const goBackFunc = () => {
  if (currentValue > 1) {
    currentValue--;
    changeCurrentPaginate();
  }
};
const goNextFunc = () => {
  if (windowWidth > 768) {
    if (currentValue < 5) {
      currentValue++;
      changeCurrentPaginate();
    }
  }
  if (windowWidth < 768) {
    if (currentValue < 3) {
      currentValue++;
      changeCurrentPaginate();
    }
  }
};
// End Dashboard page
// Customize datatable jquery
$(document).ready(function () {
  if (dashboardPage) {
    var supportTicketsTable = $("#support-tickets-table").DataTable({
      responsive: true,
      paging: true, // Enable pagination
      pagingType: "simple_numbers",
      searching: true, // Enable search box
      ordering: false, // Enable sorting on columns
      info: false, // Show info (e.g., "Showing 1 to 10 of 57 entries")
      lengthMenu: [8, 15, 20], // Set page length options
    });
    $("#search-tickets-table").on("keyup", function () {
      supportTicketsTable.search(this.value).draw();
    });
    var invoicesTable = $("#invoices-table").DataTable({
      responsive: true,
      paging: true, // Enable pagination
      pagingType: "simple_numbers",
      searching: true, // Enable search box
      ordering: false, // Enable sorting on columns
      info: false, // Show info (e.g., "Showing 1 to 10 of 57 entries")
      lengthMenu: [8, 15, 20], // Set page length options
    });
    $("#search-invoices-table").on("keyup", function () {
      invoicesTable.search(this.value).draw();
    });
  }
});
// handle active price in recharge-balance-popup
const thePrices = document.querySelectorAll(
  ".recharge-balance-popup .prices .price"
);
thePrices.forEach((price) => {
  price.addEventListener("click", () => {
    thePrices.forEach((price) => price.classList.remove("active"));
    price.classList.add("active");
  });
});
// Handle my-select
const mySelects = document.querySelectorAll(".my-select");

mySelects.forEach((select) => {
  select.addEventListener("click", () => select.classList.toggle("active"));
  const selected = document.querySelector(`.${select.classList[1]} .selected`);
  const selectItems = document.querySelectorAll(
    `.${select.classList[1]} ul li`
  );
  selectItems.forEach((item) => {
    item.addEventListener("click", () => {
      selected.innerHTML = item.innerHTML;
    });
  });
});
// Customize OTP verification code
//Initial references
const inputs = document.querySelectorAll(".inputfield .input");
const inputFields = document.querySelectorAll(".inputfield");
if (inputFields) {
  inputFields.forEach((inputField) => {
    let inputCount = 0,
      finalInput = "";

    //Update input
    const updateInputConfig = (element, disabledStatus) => {
      element.disabled = disabledStatus;
      if (!disabledStatus) {
        element.focus();
      } else {
        element.blur();
      }
    };

    inputs.forEach((element) => {
      element.addEventListener("keyup", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        let { value } = e.target;

        if (value.length == 1) {
          updateInputConfig(e.target, true);
          if (inputCount <= 3 && e.key != "Backspace") {
            finalInput += value;
            if (inputCount < 3) {
              updateInputConfig(e.target.nextElementSibling, false);
            }
          }
          inputCount += 1;
        } else if (value.length == 0 && e.key == "Backspace") {
          finalInput = finalInput.substring(0, finalInput.length - 1);
          if (inputCount == 0) {
            updateInputConfig(e.target, false);
            return false;
          }
          updateInputConfig(e.target, true);
          e.target.previousElementSibling.value = "";
          updateInputConfig(e.target.previousElementSibling, false);
          inputCount -= 1;
        } else if (value.length > 1) {
          e.target.value = value.split("")[0];
        }
      });
    });

    window.addEventListener("keyup", (e) => {
      if (inputCount > 3) {
        if (e.key == "Backspace") {
          finalInput = finalInput.substring(0, finalInput.length - 1);
          updateInputConfig(inputField.lastElementChild, false);
          inputField.lastElementChild.value = "";
          inputCount -= 1;
        }
      }
    });
    //Start
    const startInput = () => {
      inputCount = 0;
      finalInput = "";
      inputs.forEach((element) => {
        element.value = "";
      });
      updateInputConfig(inputField.firstElementChild, false);
    };

    window.onload = startInput();
  });
}
// =======================================//
// =======================================//
// =======================================//
// =======================================//
// =======================================//
// =======================================//
// =======================================//
// =======================================//
// =======================================//
// =======================================//
// =======================================//
// =======================================//
// control show password
const passwordInput = document.querySelector(
  ".auth-popup input[type='password']"
);
const eyeHidden = document.querySelector(
  ".auth-popup .the-password-input .eye-hidden"
);
const eyeShow = document.querySelector(
  ".auth-popup .the-password-input .eye-show"
);
if (eyeShow) {
  eyeHidden.addEventListener("click", () => {
    eyeHidden.classList.remove("show");
    eyeShow.classList.add("show");
    passwordInput.type = "text";
  });
  eyeShow.addEventListener("click", () => {
    eyeShow.classList.remove("show");
    eyeHidden.classList.add("show");
    passwordInput.type = "password";
  });
}
// handle increment and decrement numbers input
const theNumberInput = document.querySelector(
  ".balance-sufficient-popup .the-quantity-input input[type='number']"
);
const incrementBtn = document.querySelector(
  ".balance-sufficient-popup .the-quantity-input i.increment"
);
const decrementBtn = document.querySelector(
  ".balance-sufficient-popup .the-quantity-input i.decrement"
);

const incrementFunc = () => theNumberInput.value++;
const decrementFunc = () => {
  if (theNumberInput.value > 0) theNumberInput.value--;
};
