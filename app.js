/* Created by Tivotal */

let sec = document.querySelectorAll("section");

window.onscroll = () => {
  let scrollVal = window.scrollY;
  sec.forEach((section) => {
    let secHeight = section.offsetHeight;
    let secTop = section.offsetTop - 200;
    let secId = section.getAttribute("id");
    if (scrollVal > secTop && scrollVal <= secTop + secHeight) {
      document
        .querySelector('.nav a[href*="' + secId + '"]')
        .parentElement.classList.add("active");
    } else {
      document
        .querySelector('.nav a[href*="' + secId + '"]')
        .parentElement.classList.remove("active");
    }
  });
};
