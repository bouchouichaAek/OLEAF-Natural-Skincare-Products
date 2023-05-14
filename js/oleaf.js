var check = document.querySelector("nav .navbar .chackbox");
var links = document.querySelector("nav .navbar .links");
check.onclick = function () {
  if (check.classList.contains("active")) {
    links.style.left = "0";
    check.classList.remove("active");
  } else if (!check.classList.contains("active")) {
    links.style.left = "-100%";
    check.classList.add("active");
  }
};
