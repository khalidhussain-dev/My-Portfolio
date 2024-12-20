// //   Add event listeners for smooth scroll and section highlight
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-link");

// //    Function to handle adding/removing active class on scroll
// window.addEventListener("scroll", () => {
//   let current = "";

//   const headerHeight = 5 * 16;
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     // if (pageYOffset >= sectionTop - sectionHeight / 3) {
//     //   current = section.getAttribute("id");
//     // }
//     if (
//       pageYOffset >= sectionTop - headerHeight &&
//       pageYOffset < sectionTop + sectionHeight - headerHeight
//     ) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href").includes(current)) {
//       link.classList.add("active");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;
  const links = document.querySelectorAll('.header a[href^="#"]');
  const sections = document.querySelectorAll(".section");

  function handleScroll() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - headerHeight;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        let targetPosition = targetElement.offsetTop;

        // Adjust scroll position for sections except home
        if (targetId !== "home") {
          targetPosition -= headerHeight;
        }

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  window.addEventListener("scroll", handleScroll);
});
