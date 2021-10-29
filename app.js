document.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("scroll", () => {
    console.log("scroll");
    let header = document.querySelector("navbar navbar-expand-lg navbar-light");
    let windowPosition = window.scrollY > 70;
    header.classList.toggle("scrolling-active", windowPosition);
    console.log("scrolldone")
  });
  // prompt("Hello");
  
});
